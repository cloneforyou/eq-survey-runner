from flask import url_for

from app.questionnaire.rules import evaluate_skip_conditions
from app.templating.summary.question import Question


class Block:

    def __init__(self, block_schema, group_id, answer_store, metadata, schema, group_instance):
        self.id = block_schema['id']
        self.title = block_schema.get('title')
        self.number = block_schema.get('number')
        self.link = self._build_link(block_schema, group_id, metadata, group_instance)
        self.questions = self._build_questions(block_schema, answer_store, metadata, schema, group_instance)

    @staticmethod
    def _build_link(block_schema, group_id, metadata, group_instance):
        return url_for('questionnaire.get_block',
                       eq_id=metadata['eq_id'],
                       form_type=metadata['form_type'],
                       collection_id=metadata['collection_exercise_sid'],
                       group_id=group_id,
                       group_instance=group_instance,
                       block_id=block_schema['id'])

    @staticmethod
    def _build_questions(block_schema, answer_store, metadata, schema, group_instance):
        questions = []
        for question_schema in block_schema.get('questions', []):
            is_skipped = evaluate_skip_conditions(question_schema.get('skip_conditions'), schema, metadata, answer_store)
            if not is_skipped:
                question = Question(question_schema, answer_store, metadata, schema, group_instance).serialize()
                questions.append(question)
        return questions

    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'number': self.number,
            'link': self.link,
            'questions': self.questions,
        }
