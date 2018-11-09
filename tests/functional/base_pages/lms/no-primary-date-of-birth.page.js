// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class NoPrimaryDateOfBirthPage extends QuestionPage {

  constructor() {
    super('no-primary-date-of-birth');
  }

  day() {
    return '#no-primary-date-of-birth-answer-day';
  }

  month() {
    return '#no-primary-date-of-birth-answer-month';
  }

  year() {
    return '#no-primary-date-of-birth-answer-year';
  }

}
module.exports = new NoPrimaryDateOfBirthPage();
