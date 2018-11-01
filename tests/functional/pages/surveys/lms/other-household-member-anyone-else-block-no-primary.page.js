// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class OtherHouseholdMemberAnyoneElseBlockNoPrimaryPage extends QuestionPage {

  constructor() {
    super('other-household-member-anyone-else-block-no-primary');
  }

  yes() {
    return '#other-household-member-anyone-else-no-primary-0';
  }

  yesLabel() { return '#label-other-household-member-anyone-else-no-primary-0'; }

  no() {
    return '#other-household-member-anyone-else-no-primary-1';
  }

  noLabel() { return '#label-other-household-member-anyone-else-no-primary-1'; }

}
module.exports = new OtherHouseholdMemberAnyoneElseBlockNoPrimaryPage();
