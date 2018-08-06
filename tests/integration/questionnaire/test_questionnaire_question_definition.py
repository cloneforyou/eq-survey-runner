from tests.integration.integration_test_case import IntegrationTestCase


class TestQuestionnaireQuestionDefinition(IntegrationTestCase):

    def test_question_definition(self):
        # Given I launch a questionnaire with definitions
        self.launchSurvey('test', 'question_definition')

        # When I start the survey I am presented with the definitions title and content correctly
        self.assertInPage('Do you connect a LiFePO4 battery to your photovoltaic system to store surplus energy?')

        self.assertInPage('What is a photovoltaic system?')
        self.assertInPage('A typical photovoltaic system employs solar panels, each comprising a number of solar cells, '
                          'which generate electrical power. PV installations may be ground-mounted, rooftop mounted or wall mounted. '
                          'The mount may be fixed, or use a solar tracker to follow the sun across the sky.')

        self.assertInPage('Why use LiFePO4 batteries?')
        self.assertInPage('3 Benefits of LifePO4 batteries.')
        self.assertInPage('LifePO4 batteries have a life span 10 times longer than that of traditional lead acid batteries. '
                          'This dramatically reduces the need for battery changes.')
        self.assertInPage('Lithium iron phosphate batteries operate with much lower resistance and consequently recharge at a faster rate.')
        self.assertInPage('LifeP04 lightweight batteries are lighter than lead acid batteries, usually weighing about 1/4 less.')

        # When we continue we go to the summary page
        self.post(action='save_continue')
        self.assertInUrl('summary')

        # And Submit my answers
        self.post(action='submit_answers')
        self.assertInUrl('thank-you')
