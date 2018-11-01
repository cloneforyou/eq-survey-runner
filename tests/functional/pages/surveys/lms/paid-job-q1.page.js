// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class PaidJobQ1Page extends QuestionPage {

  constructor() {
    super('paid-job-q1');
  }

  yes() {
    return '#paid-job-answer-0';
  }

  yesLabel() { return '#label-paid-job-answer-0'; }

  no() {
    return '#paid-job-answer-1';
  }

  noLabel() { return '#label-paid-job-answer-1'; }

}
module.exports = new PaidJobQ1Page();
