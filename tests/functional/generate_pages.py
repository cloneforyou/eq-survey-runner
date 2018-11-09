#!/usr/bin/env python

import argparse
import json
import logging
import os
import re
from string import Template

logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

parser = argparse.ArgumentParser(description='Generate a bag of DOM selectors, organised by page, '
                                             'to make writing webdriver tests easier')

parser.add_argument('SCHEMA',
                    help='The path to the schema file you want to generate pages for.'
                         'If this path is a directory, then all files matching --test_schema_prefix'
                         'will be used to generate pages')

parser.add_argument('OUT_DIRECTORY', help='The path to the directory where the pages should be written.'
                                          'If a schema directory is used, subdirectories will be created for each schema')

parser.add_argument('-s', '--spec_file', help='The file where the template spec should be written.'
                                              'This flag has no effect when using a schema directory')

parser.add_argument('-r', '--require_path', default='../../base_pages',
                    help='The relative path from a page file to the directory containing the base/parent page classes. '
                         'Defaults to ".."')

parser.add_argument('-p', '--test_schema_prefix', default='test_',
                    help='The prefix of schemas which should be used to generate pages in the passed in directory')


SPEC_PAGE_HEADER = "const helpers = require('../helpers');\n\n"

SPEC_PAGE_IMPORT = Template(r"""const ${pageName}Page = require('../generated_pages/${pageDir}/${pageFile}');
""")

SPEC_EXAMPLE_TEST = Template(r"""
describe('Example Test', function() {

  it('Given..., When..., Then...', function() {
    return helpers.openQuestionnaire('${schema}').then(() => {
        return browser
        });
    });
});

""")

HEADER = Template(r"""// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const $basePage = require('$relativeRequirePath/$basePageFile');

""")

CLASS_NAME = Template(r"""class ${pageName}Page extends $basePage {

""")

QUESTION_DEFINITION_TITLE_GETTER = Template(r"""  definitionTitle${definitionIndex}() { return '[data-definition-title-index="${definitionIndex}"]'; }

""")

QUESTION_DEFINITION_CONTENT_GETTER = Template(r"""  definitionContent${definitionIndex}() { return '[data-definition-content-index="${definitionIndex}"]'; }

""")

QUESTION_DEFINITION_BUTTON_GETTER = Template(r"""  definitionButton${definitionIndex}() { return '[data-definition-hide-button-index="${definitionIndex}"]'; }

""")

ANSWER_LABEL_GETTER = Template(r"""  ${answerName}Label() { 
    return '#label-${answerId}';
  }

""")

ANSWER_ERROR_GETTER = Template(r"""  ${answerName}ErrorItem() { 
    return '#container-${answerId} > aside > div.panel__header > ul > li';
  }

""")

ANSWER_LABEL_DESCRIPTION_GETTER = Template(r"""  ${answerName}LabelDescription() { return '#label-${answerId} > .label__description'; }

""")

ANSWER_GETTER = Template(r"""  ${answerName}() {
    return '#${answerId}';
  }

""")

BLOCK_DESCRIPTION = Template(r"""  ${block_name}Description() {
    return 'div.block__description';
  }

""")

ANSWER_UNIT_TYPE_GETTER = Template(r"""  ${answerName}Unit() {
    return '#${answerId}-type';
  }

""")

RELATIONSHIP_ANSWER_GETTER = Template(r"""  ${answerName}(instance) {
    return '[name="${answerId}-' + instance + '"]';
  }

""")

RELATIONSHIP_ANSWER_SETTER = Template(r"""  relationship(instance, answer) {
    return '#${answerId}-' + instance + ' > [value="' + answer + '"]';
  }

""")

HOUSEHOLD_ANSWER_GETTER = Template(r"""  ${answerName}(index = '') {
    return '#household-0-${answerId}' + index;
  }

""")

REPEATING_ANSWER_ADD_REMOVE = r"""  addPerson() {
    return 'button[name="action[add_answer]"]';
  }

  removePerson(index = 0) {
    return 'div.question__answer:nth-child('+ (index+1) + ') > h3 button';
    // Have to check whether it's visible in test code
  }

"""

REPEATING_ANSWER_LEGEND = r"""  personLegend(index = 1) {
    return 'div.question__answer:nth-child(' + index + ') > fieldset > legend';
  }
"""

SECTION_SUMMARY_ANSWER_GETTER = Template(r"""  ${answerName}(index = 0) { return '#${answerId}-' + index + '-answer'; }

""")

SECTION_SUMMARY_ANSWER_EDIT_GETTER = Template(r"""  ${answerName}Edit(index = 0) { return '[data-qa="${answerId}-' + index + '-edit"]'; }

""")

SUMMARY_ANSWER_GETTER = Template(r"""  ${answerName}(index = 0) { return '#${answerId}-' + index + '-answer'; }

""")


SUMMARY_ANSWER_EDIT_GETTER = Template(r"""  ${answerName}Edit(index = 0) { return '[data-qa="${answerId}-' + index + '-edit"]'; }

""")

SUMMARY_TITLE_GETTER = Template(r"""  ${group_id_camel}Title(index = 0) { return '#${group_id}-' + index; }

""")

SUMMARY_SHOW_ALL_BUTTON = Template(r"""  summaryShowAllButton() { return 'div.collapsible__controls > button'; }

""")

ANSWER_SUMMARY_EDIT_GETTER = Template(r"""  ${answerName}Edit(index = 1) { return '[data-qa="${answerId}-' + index + '-edit"]'; }

""")

ANSWER_SUMMARY_LABEL_GETTER = Template(r"""  ${answerName}Label(index = 1) { return '[data-qa="${answerId}-' + index + '-label"]'; } 

""")

ANSWER_SUMMARY_ADD_LINK_GETTER = Template(r"""  addPersonLink() { return '#add-person-link'; }

""")

SUMMARY_QUESTION_GETTER = Template(r"""  ${questionName}(index = 0) { return '#${questionId}-' + index; }

""")

CALCULATED_SUMMARY_LABEL_GETTER = Template(r"""  ${answerName}Label(index = 0) { return '#${answerId}-' + index + '-label'; } 

""")

CONSTRUCTOR = Template(r"""  constructor() {
    super('${block_id}');
  }

""")

FOOTER = Template(r"""}
module.exports = new ${pageName}Page();
""")


def generate_pascal_case_from_id(id_str):
    parts = re.sub('[^0-9a-zA-Z]+', '-', id_str).split('-')
    name = ''.join([p.title() for p in parts])
    return name


def camel_case(s):
    if s:
        return s[0].lower() + s[1:]
    else:
        return


def process_options(answer_id, options, page_spec, base_prefix):
    for index, option in enumerate(options):
        if option['value'][0].isalpha():
            prefix = base_prefix
        else:
            prefix = base_prefix + 'Answer'

        option_name = camel_case(prefix + generate_pascal_case_from_id(option['value']))
        option_id = '{name}-{index}'.format(name=answer_id, index=index)

        option_context = {
            'answerName': option_name,
            'answerId': option_id
        }

        page_spec.write(ANSWER_GETTER.substitute(option_context))
        page_spec.write(ANSWER_LABEL_GETTER.substitute(option_context))

        # Add a selector for an option which exposes another input, e.g.
        # an 'Other' option which exposes a text input for the user to fill in
        if 'child_answer_id' in option:
            option_context = {
                'answerId': option['child_answer_id'],
                'answerName': option_name + 'Text'
            }
            page_spec.write(ANSWER_GETTER.substitute(option_context))


def process_answer(question_type, answer, page_spec, long_names, page_name):

    answer_name = generate_pascal_case_from_id(answer['id'])
    answer_name = answer_name.replace(page_name, '')
    answer_name = answer_name.replace('Answer', '')

    prefix = camel_case(answer_name) if answer_name and long_names else ''

    if answer_name is None or answer_name == '':
        answer_name = 'answer'

    if 'parent_answer_id' in answer:
        logger.debug('\t\tSkipping Child Answer: %s', answer['id'])
        return

    elif answer['type'] in ('Radio', 'Checkbox'):
        process_options(answer['id'], answer['options'], page_spec, prefix)

    elif answer['type'] in 'Date':
        page_spec.write(_write_date_answer(answer['id'], prefix))

    elif answer['type'] in 'MonthYearDate':
        page_spec.write(_write_month_year_date_answer(answer['id'], prefix))

    elif answer['type'] in 'Duration':
        page_spec.write(_write_duration_answer(answer['id'], answer['units'], prefix))

    elif answer['type'] in 'Relationship':
        answer_context = {
            'answerName': camel_case(answer_name),
            'answerId': answer['id']
        }

        page_spec.write(RELATIONSHIP_ANSWER_GETTER.substitute(answer_context))
        page_spec.write(RELATIONSHIP_ANSWER_SETTER.substitute(answer_context))
        page_spec.write(ANSWER_LABEL_GETTER.substitute(answer_context))

    elif answer['type'] in ('TextField', 'Number', 'TextArea', 'Currency', 'Percentage', 'Unit', 'Dropdown'):
        answer_context = {
            'answerName': camel_case(answer_name),
            'answerId': answer['id']
        }


        if question_type in ['RepeatingAnswer']:
            page_spec.write(HOUSEHOLD_ANSWER_GETTER.substitute(answer_context))
        else:
            page_spec.write(ANSWER_GETTER.substitute(answer_context))
            page_spec.write(ANSWER_LABEL_GETTER.substitute(answer_context))
            page_spec.write(ANSWER_LABEL_DESCRIPTION_GETTER.substitute(answer_context))
            page_spec.write(ANSWER_ERROR_GETTER.substitute(answer_context))

        if answer['type'] == 'Unit':
            page_spec.write(ANSWER_UNIT_TYPE_GETTER.substitute(answer_context))

    else:
        raise Exception('Answer type {} not configured'.format(answer['type']))


def process_question(question, page_spec, num_questions, page_name):
    logger.debug('\t\tprocessing question: ', title=question.get('title', 'titles'), question_id=question['id'])

    question_type = question['type']
    if question_type == 'RepeatingAnswer':
        page_spec.write(REPEATING_ANSWER_ADD_REMOVE)
        page_spec.write(REPEATING_ANSWER_LEGEND)

    long_names = long_names_required(question, num_questions)

    if 'definitions' in question:
        for index, definition in enumerate(question['definitions'], 1):
            definition_context = {
                'definitionIndex': index,
            }
            page_spec.write(QUESTION_DEFINITION_TITLE_GETTER.substitute(definition_context))
            page_spec.write(QUESTION_DEFINITION_CONTENT_GETTER.substitute(definition_context))
            page_spec.write(QUESTION_DEFINITION_BUTTON_GETTER.substitute(definition_context))

    for answer in question.get('answers', []):
        process_answer(question_type, answer, page_spec, long_names, page_name)


def process_calculated_summary(answers, page_spec):
    for answer in answers:
        answer_name = generate_pascal_case_from_id(answer)
        answer_context = {
            'answerName': camel_case(answer_name),
            'answerId': answer
        }

        page_spec.write(SUMMARY_ANSWER_GETTER.substitute(answer_context))
        page_spec.write(SUMMARY_ANSWER_EDIT_GETTER.substitute(answer_context))
        page_spec.write(CALCULATED_SUMMARY_LABEL_GETTER.substitute(answer_context))


def process_answer_summary(block, page_spec):
    for answer_id in block.get('answer_ids'):
        answer_name = generate_pascal_case_from_id(answer_id)
        answer_context = {
            'answerName': camel_case(answer_name),
            'answerId': answer_id
        }

        page_spec.write(ANSWER_SUMMARY_EDIT_GETTER.substitute(answer_context))
        page_spec.write(ANSWER_SUMMARY_LABEL_GETTER.substitute(answer_context))
        page_spec.write(ANSWER_SUMMARY_ADD_LINK_GETTER.substitute(answer_context))


def process_summary(schema_data, page_spec):
    for section in schema_data['sections']:
        for group in section['groups']:
            for block in group['blocks']:
                for question in block.get('questions', []):
                    question_context = {
                        'questionId': question['id'],
                        'questionName': camel_case(generate_pascal_case_from_id(question['id']))
                    }
                    for answer in question.get('answers', []):
                        answer_name = generate_pascal_case_from_id(answer['id'])
                        answer_context = {
                            'answerName': camel_case(answer_name),
                            'answerId': answer['id']
                        }
                        if block['type'] == 'SectionSummary':
                            page_spec.write(SECTION_SUMMARY_ANSWER_GETTER.substitute(answer_context))
                            page_spec.write(SECTION_SUMMARY_ANSWER_EDIT_GETTER.substitute(answer_context))

                        page_spec.write(SUMMARY_ANSWER_GETTER.substitute(answer_context))
                        page_spec.write(SUMMARY_ANSWER_EDIT_GETTER.substitute(answer_context))

                    page_spec.write(SUMMARY_QUESTION_GETTER.substitute(question_context))

                if block['type'] == 'SectionSummary':
                    page_spec.write(SUMMARY_SHOW_ALL_BUTTON.substitute())

            group_context = {
                'group_id_camel': camel_case(generate_pascal_case_from_id(group['id'])),
                'group_id': group['id']
            }
            page_spec.write(SUMMARY_TITLE_GETTER.substitute(group_context))


def long_names_required(question, num_questions):
    if num_questions > 1:
        return True
    else:
        num_answers = len(question.get('answers', []))

        if num_answers > 1:
            return True

    return False


def _write_date_answer(answer_id, prefix):
    return \
        ANSWER_GETTER.substitute({'answerName': prefix + 'day', 'answerId': answer_id + '-day'}) + \
        ANSWER_GETTER.substitute({'answerName': prefix + 'month', 'answerId': answer_id + '-month'}) + \
        ANSWER_GETTER.substitute({'answerName': prefix + 'year', 'answerId': answer_id + '-year'}) + \
        ANSWER_LABEL_GETTER.substitute({'answerName': prefix + 'day', 'answerId': answer_id + '-day'}) + \
        ANSWER_LABEL_GETTER.substitute({'answerName': prefix + 'month', 'answerId': answer_id + '-month'}) + \
        ANSWER_LABEL_GETTER.substitute({'answerName': prefix + 'year', 'answerId': answer_id + '-year'})


def _write_month_year_date_answer(answer_id, prefix):
    return \
        ANSWER_GETTER.substitute({'answerName': prefix + 'Month', 'answerId': answer_id + '-month'}) + \
        ANSWER_GETTER.substitute({'answerName': prefix + 'Year', 'answerId': answer_id + '-year'}) + \
        ANSWER_LABEL_GETTER.substitute({'answerName': prefix + 'Month', 'answerId': answer_id + '-month'}) + \
        ANSWER_LABEL_GETTER.substitute({'answerName': prefix + 'Year', 'answerId': answer_id + '-year'})


def _write_duration_answer(answer_id, units, prefix):
    resp = []
    for unit in units:
        resp.append(ANSWER_GETTER.substitute({'answerName': prefix + unit.title(), 'answerId': answer_id + '-' + unit}))

    return ''.join(resp)


def find_kv(block, key, values):
    for question in block.get('questions', []):
        for answer in question.get('answers', []):
            if key in answer and answer[key] in values:
                return True

    return False


def process_block(block, dir_out, schema_data, spec_file, relative_require='..'):
    logger.debug('Processing Block: %s', block['id'])

    page_filename = block['id'] + '.page.js'
    page_path = os.path.join(dir_out, page_filename)

    logger.info('creating %s...', page_path)

    with open(page_path, 'w') as page_spec:
        page_name = generate_pascal_case_from_id(block['id'])

        base_page = 'QuestionPage'
        base_page_file = 'question.page'

        if block['type'] == 'CalculatedSummary':
            base_page = 'CalculatedSummaryPage'
            base_page_file = 'calculated-summary.page'
            relative_require = relative_require.replace('/surveys', '')

        block_context = {
            'pageName': page_name,
            'basePage': base_page,
            'basePageFile': base_page_file,
            'pageDir': dir_out.split('/')[-1],
            'pageFile': page_filename,
            'block_id': block['id'],
            'block_name': camel_case(generate_pascal_case_from_id(block['id'])),
            'relativeRequirePath': relative_require
        }

        page_spec.write(HEADER.substitute(block_context))
        page_spec.write(CLASS_NAME.substitute(block_context))
        page_spec.write(CONSTRUCTOR.substitute(block_context))
        if block['type'] in ('Summary', 'SectionSummary'):
            process_summary(schema_data, page_spec)
        elif block['type'] in ('AnswerSummary'):
            process_answer_summary(block, page_spec)
        elif block['type'] in ('CalculatedSummary'):
            process_calculated_summary(block['calculation']['answers_to_calculate'], page_spec)
        else:
            if block.get('description'):
                page_spec.write(BLOCK_DESCRIPTION.substitute(block_context))

            num_questions = len(block.get('questions', []))

            for question in block.get('questions', []):
                process_question(question, page_spec, num_questions, page_name)

        page_spec.write(FOOTER.substitute(block_context))

        if spec_file:
            with open(spec_file, 'a') as required_template_spec:
                required_template_spec.write(SPEC_PAGE_IMPORT.substitute(block_context))


def process_schema(in_schema, out_dir, spec_file, require_path='..'):

    data = json.loads(open(in_schema).read())

    try:
        os.stat(out_dir)
    except IndexError:
        os.mkdir(out_dir)

    for section in data['sections']:
        for group in section['groups']:
            for block in group['blocks']:
                process_block(block, out_dir, data, spec_file, require_path)


if __name__ == '__main__':
    args = parser.parse_args()

    template_spec_file = args.spec_file

    os.makedirs(args.OUT_DIRECTORY, exist_ok=True)


    if template_spec_file:
        os.makedirs(os.path.dirname(template_spec_file), exist_ok=True)
        with open(template_spec_file, 'w') as template_spec:
            template_spec.write(SPEC_PAGE_HEADER)
            template_spec.close()

            process_schema(args.SCHEMA, args.OUT_DIRECTORY, template_spec_file, args.require_path)

            with open(template_spec_file, 'a') as template_spec:
                schema_name = {'schema': os.path.basename(args.SCHEMA)}
                template_spec.write(SPEC_EXAMPLE_TEST.substitute(schema_name))
    else:
        if os.path.isdir(args.SCHEMA):
            for root, dirs, files in os.walk(args.SCHEMA):
                for file in [os.path.join(root, file) for file in files if file.startswith(args.test_schema_prefix)]:
                    output_dir = os.path.join(args.OUT_DIRECTORY, os.path.basename(file).split('.')[0].replace('test_', ''))
                    if not os.path.exists(output_dir):
                        os.makedirs(output_dir)
                    process_schema(file, output_dir, None, args.require_path)

        else:
            process_schema(args.SCHEMA, args.OUT_DIRECTORY, template_spec_file, args.require_path)
