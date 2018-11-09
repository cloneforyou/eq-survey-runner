// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class ReceivingHalfSalaryW15Page extends QuestionPage {

  constructor() {
    super('receiving-half-salary-w15');
  }

  receivingHalfSalaryYes() {
    return '#receiving-half-salary-answer-0';
  }

  receivingHalfSalaryYesLabel() { return '#label-receiving-half-salary-answer-0'; }

  receivingHalfSalaryNo() {
    return '#receiving-half-salary-answer-1';
  }

  receivingHalfSalaryNoLabel() { return '#label-receiving-half-salary-answer-1'; }

  willReturnToWorkYes() {
    return '#will-return-to-work-answer-0';
  }

  willReturnToWorkYesLabel() { return '#label-will-return-to-work-answer-0'; }

  willReturnToWorkNo() {
    return '#will-return-to-work-answer-1';
  }

  willReturnToWorkNoLabel() { return '#label-will-return-to-work-answer-1'; }

}
module.exports = new ReceivingHalfSalaryW15Page();
