// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class EthnicGroupPage extends QuestionPage {

  constructor() {
    super('ethnic-group');
  }

  white() {
    return '#ethnic-group-answer-0';
  }

  whiteLabel() { return '#label-ethnic-group-answer-0'; }

  mixedOrMultipleEthnicGroups() {
    return '#ethnic-group-answer-1';
  }

  mixedOrMultipleEthnicGroupsLabel() { return '#label-ethnic-group-answer-1'; }

  asianOrAsianBritish() {
    return '#ethnic-group-answer-2';
  }

  asianOrAsianBritishLabel() { return '#label-ethnic-group-answer-2'; }

  blackAfricanCaribbeanOrBlackBritish() {
    return '#ethnic-group-answer-3';
  }

  blackAfricanCaribbeanOrBlackBritishLabel() { return '#label-ethnic-group-answer-3'; }

  other() {
    return '#ethnic-group-answer-4';
  }

  otherLabel() { return '#label-ethnic-group-answer-4'; }

}
module.exports = new EthnicGroupPage();
