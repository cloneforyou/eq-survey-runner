from app.schema.widget import Widget
from flask import render_template
from app.libs.utils import ObjectFromDict


class CheckboxGroupWidget(Widget):
    def __init__(self, name):
        super().__init__(name)

    def get_user_input(self, post_vars):
        # Returns an empty list
        return post_vars.getlist(self.name)

    def render(self, answer_schema, answer_state):
        widget_params = {
            'widget': {
                'options': self._build_options(answer_schema, answer_state),
                'allow_other': False
            },
            'answer': {
                'name': self.name,
                'id': answer_schema.id,
                'label': answer_schema.label or 'Label'
            },
            'debug': {
                'state': answer_state.__dict__
            }
        }

        return render_template('/partials/widgets/checkbox_group_widget.html', **widget_params)

    def _build_options(self, answer_schema, answer_state):
        options = []

        if answer_schema.options:
            for option in answer_schema.options:
                option_selected = False
                if answer_state.input:
                    option_selected = option['value'] in answer_state.input
                options.append(ObjectFromDict({
                    'value': option['value'],
                    'label': option['label'],
                    'selected': option_selected
                }))

        return options
