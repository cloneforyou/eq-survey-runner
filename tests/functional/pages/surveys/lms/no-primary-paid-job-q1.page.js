// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class NoPrimaryPaidJobQ1Page extends QuestionPage {

  constructor() {
    super('no-primary-paid-job-q1');
  }

  yes() {
    return '#no-primary-paid-job-answer-0';
  }

  yesLabel() { return '#label-no-primary-paid-job-answer-0'; }

  no() {
    return '#no-primary-paid-job-answer-1';
  }

  noLabel() { return '#label-no-primary-paid-job-answer-1'; }

}
module.exports = new NoPrimaryPaidJobQ1Page();
