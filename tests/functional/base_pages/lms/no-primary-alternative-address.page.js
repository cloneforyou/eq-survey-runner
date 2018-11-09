// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class NoPrimaryAlternativeAddressPage extends QuestionPage {

  constructor() {
    super('no-primary-alternative-address');
  }

  yes() {
    return '#no-primary-alternative-address-answer-0';
  }

  yesLabel() { return '#label-no-primary-alternative-address-answer-0'; }

  no() {
    return '#no-primary-alternative-address-answer-1';
  }

  noLabel() { return '#label-no-primary-alternative-address-answer-1'; }

}
module.exports = new NoPrimaryAlternativeAddressPage();
