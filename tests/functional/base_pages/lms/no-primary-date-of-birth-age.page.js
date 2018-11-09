// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class NoPrimaryDateOfBirthAgePage extends QuestionPage {

  constructor() {
    super('no-primary-date-of-birth-age');
  }

  answer() {
    return '#no-primary-dob-age-answer';
  }

  answerLabel() { return '#label-no-primary-dob-age-answer'; }

  answerLabelDescription() { return '#label-no-primary-dob-age-answer > .label__description'; }

  answerUnit() {
    return '#no-primary-dob-age-answer-type';
  }

}
module.exports = new NoPrimaryDateOfBirthAgePage();
