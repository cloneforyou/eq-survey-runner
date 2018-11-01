// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class NoPrimarySexPage extends QuestionPage {

  constructor() {
    super('no-primary-sex');
  }

  male() {
    return '#no-primary-sex-answer-0';
  }

  maleLabel() { return '#label-no-primary-sex-answer-0'; }

  female() {
    return '#no-primary-sex-answer-1';
  }

  femaleLabel() { return '#label-no-primary-sex-answer-1'; }

}
module.exports = new NoPrimarySexPage();
