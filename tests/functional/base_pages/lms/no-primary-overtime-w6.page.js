// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class NoPrimaryOvertimeW6Page extends QuestionPage {

  constructor() {
    super('no-primary-overtime-w6');
  }

  paidOvertime() {
    return '#no-primary-overtime-answer-0';
  }

  paidOvertimeLabel() { return '#label-no-primary-overtime-answer-0'; }

  unpaidOvertime() {
    return '#no-primary-overtime-answer-1';
  }

  unpaidOvertimeLabel() { return '#label-no-primary-overtime-answer-1'; }

  paidAndUnpaidOvertime() {
    return '#no-primary-overtime-answer-2';
  }

  paidAndUnpaidOvertimeLabel() { return '#label-no-primary-overtime-answer-2'; }

  noOvertime() {
    return '#no-primary-overtime-answer-3';
  }

  noOvertimeLabel() { return '#label-no-primary-overtime-answer-3'; }

}
module.exports = new NoPrimaryOvertimeW6Page();
