// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const CalculatedSummaryPage = require('../../calculated-summary.page');

class OneJobHoursTotalizedW13Page extends CalculatedSummaryPage {

  constructor() {
    super('one-job-hours-totalized-w13');
  }

  oneJobActualHoursAnswer(index = 0) { return '#one-job-actual-hours-answer-' + index + '-answer'; }

  oneJobActualHoursAnswerEdit(index = 0) { return '[data-qa="one-job-actual-hours-answer-' + index + '-edit"]'; }

  oneJobActualHoursAnswerLabel(index = 0) { return '#one-job-actual-hours-answer-' + index + '-label'; } 

  paidOvertimeAnswer(index = 0) { return '#paid-overtime-answer-' + index + '-answer'; }

  paidOvertimeAnswerEdit(index = 0) { return '[data-qa="paid-overtime-answer-' + index + '-edit"]'; }

  paidOvertimeAnswerLabel(index = 0) { return '#paid-overtime-answer-' + index + '-label'; } 

  unpaidOvertimeAnswer(index = 0) { return '#unpaid-overtime-answer-' + index + '-answer'; }

  unpaidOvertimeAnswerEdit(index = 0) { return '[data-qa="unpaid-overtime-answer-' + index + '-edit"]'; }

  unpaidOvertimeAnswerLabel(index = 0) { return '#unpaid-overtime-answer-' + index + '-label'; } 

  casualHoursAnswer(index = 0) { return '#casual-hours-answer-' + index + '-answer'; }

  casualHoursAnswerEdit(index = 0) { return '[data-qa="casual-hours-answer-' + index + '-edit"]'; }

  casualHoursAnswerLabel(index = 0) { return '#casual-hours-answer-' + index + '-label'; } 

}
module.exports = new OneJobHoursTotalizedW13Page();
