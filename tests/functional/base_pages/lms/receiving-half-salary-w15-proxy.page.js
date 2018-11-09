// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class ReceivingHalfSalaryW15ProxyPage extends QuestionPage {

  constructor() {
    super('receiving-half-salary-w15-proxy');
  }

  receivingHalfSalaryProxyYes() {
    return '#receiving-half-salary-proxy-answer-0';
  }

  receivingHalfSalaryProxyYesLabel() { return '#label-receiving-half-salary-proxy-answer-0'; }

  receivingHalfSalaryProxyNo() {
    return '#receiving-half-salary-proxy-answer-1';
  }

  receivingHalfSalaryProxyNoLabel() { return '#label-receiving-half-salary-proxy-answer-1'; }

  willReturnToWorkProxyYes() {
    return '#will-return-to-work-proxy-answer-0';
  }

  willReturnToWorkProxyYesLabel() { return '#label-will-return-to-work-proxy-answer-0'; }

  willReturnToWorkProxyNo() {
    return '#will-return-to-work-proxy-answer-1';
  }

  willReturnToWorkProxyNoLabel() { return '#label-will-return-to-work-proxy-answer-1'; }

}
module.exports = new ReceivingHalfSalaryW15ProxyPage();
