// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class NoPrimaryHouseholdRelationshipsBlockPage extends QuestionPage {

  constructor() {
    super('no-primary-household-relationships-block');
  }

  answer(instance) {
    return '[name="no-primary-who-is-related-' + instance + '"]';
  }

  relationship(instance, answer) {
    return '#no-primary-who-is-related-' + instance + ' > [value="' + answer + '"]';
  }

  answerLabel() { return '#label-no-primary-who-is-related'; }

}
module.exports = new NoPrimaryHouseholdRelationshipsBlockPage();
