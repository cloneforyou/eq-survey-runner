// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class AlternativeAddressPage extends QuestionPage {

  constructor() {
    super('alternative-address');
  }

  yes() {
    return '#alternative-address-answer-0';
  }

  yesLabel() { return '#label-alternative-address-answer-0'; }

  no() {
    return '#alternative-address-answer-1';
  }

  noLabel() { return '#label-alternative-address-answer-1'; }

}
module.exports = new AlternativeAddressPage();
