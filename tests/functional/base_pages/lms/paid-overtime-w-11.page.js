// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class PaidOvertimeW11Page extends QuestionPage {

  constructor() {
    super('paid-overtime-w-11');
  }

  answer() {
    return '#paid-overtime-answer';
  }

  answerLabel() { return '#label-paid-overtime-answer'; }

  answerLabelDescription() { return '#label-paid-overtime-answer > .label__description'; }

  answerUnit() {
    return '#paid-overtime-answer-type';
  }

}
module.exports = new PaidOvertimeW11Page();
