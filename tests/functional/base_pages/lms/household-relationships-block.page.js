// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class HouseholdRelationshipsBlockPage extends QuestionPage {

  constructor() {
    super('household-relationships-block');
  }

  answer(instance) {
    return '[name="who-is-related-' + instance + '"]';
  }

  relationship(instance, answer) {
    return '#who-is-related-' + instance + ' > [value="' + answer + '"]';
  }

  answerLabel() { return '#label-who-is-related'; }

}
module.exports = new HouseholdRelationshipsBlockPage();
