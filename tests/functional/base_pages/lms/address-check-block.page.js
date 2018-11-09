// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class AddressCheckBlockPage extends QuestionPage {

  constructor() {
    super('address-check-block');
  }

  yes() {
    return '#primary-household-member-address-check-answer-0';
  }

  yesLabel() { return '#label-primary-household-member-address-check-answer-0'; }

  no() {
    return '#primary-household-member-address-check-answer-1';
  }

  noLabel() { return '#label-primary-household-member-address-check-answer-1'; }

}
module.exports = new AddressCheckBlockPage();
