// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class StudentHouseholdMemberNameBlockPage extends QuestionPage {

  constructor() {
    super('student-household-member-name-block');
  }

  studentHouseholdMemberFirstName() {
    return '#student-household-member-first-name';
  }

  studentHouseholdMemberFirstNameLabel() { return '#label-student-household-member-first-name'; }

  studentHouseholdMemberFirstNameLabelDescription() { return '#label-student-household-member-first-name > .label__description'; }

  studentHouseholdMemberLastName() {
    return '#student-household-member-last-name';
  }

  studentHouseholdMemberLastNameLabel() { return '#label-student-household-member-last-name'; }

  studentHouseholdMemberLastNameLabelDescription() { return '#label-student-household-member-last-name > .label__description'; }

}
module.exports = new StudentHouseholdMemberNameBlockPage();
