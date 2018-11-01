// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class NoPrimaryProxyCheckPage extends QuestionPage {

  constructor() {
    super('no-primary-proxy-check');
  }

  noProxy() {
    return '#no-primary-proxy-check-answer-0';
  }

  noProxyLabel() { return '#label-no-primary-proxy-check-answer-0'; }

  proxy() {
    return '#no-primary-proxy-check-answer-1';
  }

  proxyLabel() { return '#label-no-primary-proxy-check-answer-1'; }

}
module.exports = new NoPrimaryProxyCheckPage();
