// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class HouseholdCheckBlockNoPrimaryPage extends QuestionPage {

  constructor() {
    super('household-check-block-no-primary');
  }

  yes() {
    return '#household-check-answer-no-primary-0';
  }

  yesLabel() { return '#label-household-check-answer-no-primary-0'; }

  no() {
    return '#household-check-answer-no-primary-1';
  }

  noLabel() { return '#label-household-check-answer-no-primary-1'; }

}
module.exports = new HouseholdCheckBlockNoPrimaryPage();
