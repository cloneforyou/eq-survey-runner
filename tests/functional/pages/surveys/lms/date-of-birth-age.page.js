// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class DateOfBirthAgePage extends QuestionPage {

  constructor() {
    super('date-of-birth-age');
  }

  answer() {
    return '#dob-age-answer';
  }

  answerLabel() { return '#label-dob-age-answer'; }

  answerLabelDescription() { return '#label-dob-age-answer > .label__description'; }

  answerUnit() {
    return '#dob-age-answer-type';
  }

}
module.exports = new DateOfBirthAgePage();
