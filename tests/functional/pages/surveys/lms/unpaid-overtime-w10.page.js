// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class UnpaidOvertimeW10Page extends QuestionPage {

  constructor() {
    super('unpaid-overtime-w10');
  }

  answer() {
    return '#unpaid-overtime-answer';
  }

  answerLabel() { return '#label-unpaid-overtime-answer'; }

  answerLabelDescription() { return '#label-unpaid-overtime-answer > .label__description'; }

  answerUnit() {
    return '#unpaid-overtime-answer-type';
  }

}
module.exports = new UnpaidOvertimeW10Page();
