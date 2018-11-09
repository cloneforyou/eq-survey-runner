// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class TimeAwayPage extends QuestionPage {

  constructor() {
    super('time-away');
  }

  yes() {
    return '#time-away-answer-0';
  }

  yesLabel() { return '#label-time-away-answer-0'; }

  no() {
    return '#time-away-answer-1';
  }

  noLabel() { return '#label-time-away-answer-1'; }

}
module.exports = new TimeAwayPage();
