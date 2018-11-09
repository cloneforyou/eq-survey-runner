// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class ReligionPage extends QuestionPage {

  constructor() {
    super('religion');
  }

  noReligion() {
    return '#religion-answer-0';
  }

  noReligionLabel() { return '#label-religion-answer-0'; }

  christian() {
    return '#religion-answer-1';
  }

  christianLabel() { return '#label-religion-answer-1'; }

  buddhist() {
    return '#religion-answer-2';
  }

  buddhistLabel() { return '#label-religion-answer-2'; }

  hindu() {
    return '#religion-answer-3';
  }

  hinduLabel() { return '#label-religion-answer-3'; }

  jewish() {
    return '#religion-answer-4';
  }

  jewishLabel() { return '#label-religion-answer-4'; }

  muslim() {
    return '#religion-answer-5';
  }

  muslimLabel() { return '#label-religion-answer-5'; }

  sikh() {
    return '#religion-answer-6';
  }

  sikhLabel() { return '#label-religion-answer-6'; }

  other() {
    return '#religion-answer-7';
  }

  otherLabel() { return '#label-religion-answer-7'; }

  otherText() {
    return '#religion-answer-other';
  }

}
module.exports = new ReligionPage();
