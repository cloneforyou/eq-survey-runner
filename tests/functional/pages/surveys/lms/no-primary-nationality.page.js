// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class NoPrimaryNationalityPage extends QuestionPage {

  constructor() {
    super('no-primary-nationality');
  }

  british() {
    return '#no-primary-nationality-answer-0';
  }

  britishLabel() { return '#label-no-primary-nationality-answer-0'; }

  irish() {
    return '#no-primary-nationality-answer-1';
  }

  irishLabel() { return '#label-no-primary-nationality-answer-1'; }

  indian() {
    return '#no-primary-nationality-answer-2';
  }

  indianLabel() { return '#label-no-primary-nationality-answer-2'; }

  pakistani() {
    return '#no-primary-nationality-answer-3';
  }

  pakistaniLabel() { return '#label-no-primary-nationality-answer-3'; }

  polish() {
    return '#no-primary-nationality-answer-4';
  }

  polishLabel() { return '#label-no-primary-nationality-answer-4'; }

  other() {
    return '#no-primary-nationality-answer-5';
  }

  otherLabel() { return '#label-no-primary-nationality-answer-5'; }

  otherText() {
    return '#no-primary-nationality-answer-other';
  }

}
module.exports = new NoPrimaryNationalityPage();
