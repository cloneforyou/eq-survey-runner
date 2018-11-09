// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class OvertimeW6Page extends QuestionPage {

  constructor() {
    super('overtime-w6');
  }

  paidOvertime() {
    return '#overtime-answer-0';
  }

  paidOvertimeLabel() { return '#label-overtime-answer-0'; }

  unpaidOvertime() {
    return '#overtime-answer-1';
  }

  unpaidOvertimeLabel() { return '#label-overtime-answer-1'; }

  paidAndUnpaidOvertime() {
    return '#overtime-answer-2';
  }

  paidAndUnpaidOvertimeLabel() { return '#label-overtime-answer-2'; }

  noOvertime() {
    return '#overtime-answer-3';
  }

  noOvertimeLabel() { return '#label-overtime-answer-3'; }

}
module.exports = new OvertimeW6Page();
