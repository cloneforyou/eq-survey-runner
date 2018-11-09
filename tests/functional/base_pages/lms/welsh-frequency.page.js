// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class WelshFrequencyPage extends QuestionPage {

  constructor() {
    super('welsh-frequency');
  }

  daily() {
    return '#welsh-frequency-answer-0';
  }

  dailyLabel() { return '#label-welsh-frequency-answer-0'; }

  weekly() {
    return '#welsh-frequency-answer-1';
  }

  weeklyLabel() { return '#label-welsh-frequency-answer-1'; }

  lessOften() {
    return '#welsh-frequency-answer-2';
  }

  lessOftenLabel() { return '#label-welsh-frequency-answer-2'; }

  never() {
    return '#welsh-frequency-answer-3';
  }

  neverLabel() { return '#label-welsh-frequency-answer-3'; }

}
module.exports = new WelshFrequencyPage();
