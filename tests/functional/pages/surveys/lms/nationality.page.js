// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class NationalityPage extends QuestionPage {

  constructor() {
    super('nationality');
  }

  british() {
    return '#nationality-answer-0';
  }

  britishLabel() { return '#label-nationality-answer-0'; }

  irish() {
    return '#nationality-answer-1';
  }

  irishLabel() { return '#label-nationality-answer-1'; }

  indian() {
    return '#nationality-answer-2';
  }

  indianLabel() { return '#label-nationality-answer-2'; }

  pakistani() {
    return '#nationality-answer-3';
  }

  pakistaniLabel() { return '#label-nationality-answer-3'; }

  polish() {
    return '#nationality-answer-4';
  }

  polishLabel() { return '#label-nationality-answer-4'; }

  other() {
    return '#nationality-answer-5';
  }

  otherLabel() { return '#label-nationality-answer-5'; }

  otherText() {
    return '#nationality-answer-other';
  }

}
module.exports = new NationalityPage();
