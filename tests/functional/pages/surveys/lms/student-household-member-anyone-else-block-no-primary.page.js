// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class StudentHouseholdMemberAnyoneElseBlockNoPrimaryPage extends QuestionPage {

  constructor() {
    super('student-household-member-anyone-else-block-no-primary');
  }

  yes() {
    return '#student-household-member-anyone-else-no-primary-0';
  }

  yesLabel() { return '#label-student-household-member-anyone-else-no-primary-0'; }

  no() {
    return '#student-household-member-anyone-else-no-primary-1';
  }

  noLabel() { return '#label-student-household-member-anyone-else-no-primary-1'; }

}
module.exports = new StudentHouseholdMemberAnyoneElseBlockNoPrimaryPage();
