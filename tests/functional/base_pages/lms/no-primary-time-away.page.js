// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class NoPrimaryTimeAwayPage extends QuestionPage {

  constructor() {
    super('no-primary-time-away');
  }

  yes() {
    return '#no-primary-time-away-answer-0';
  }

  yesLabel() { return '#label-no-primary-time-away-answer-0'; }

  no() {
    return '#no-primary-time-away-answer-1';
  }

  noLabel() { return '#label-no-primary-time-away-answer-1'; }

}
module.exports = new NoPrimaryTimeAwayPage();
