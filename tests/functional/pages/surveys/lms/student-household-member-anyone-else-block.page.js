// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class StudentHouseholdMemberAnyoneElseBlockPage extends QuestionPage {

  constructor() {
    super('student-household-member-anyone-else-block');
  }

  yes() {
    return '#student-household-member-anyone-else-0';
  }

  yesLabel() { return '#label-student-household-member-anyone-else-0'; }

  no() {
    return '#student-household-member-anyone-else-1';
  }

  noLabel() { return '#label-student-household-member-anyone-else-1'; }

}
module.exports = new StudentHouseholdMemberAnyoneElseBlockPage();
