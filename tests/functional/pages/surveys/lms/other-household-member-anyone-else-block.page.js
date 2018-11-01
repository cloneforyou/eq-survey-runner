// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class OtherHouseholdMemberAnyoneElseBlockPage extends QuestionPage {

  constructor() {
    super('other-household-member-anyone-else-block');
  }

  yes() {
    return '#other-household-member-anyone-else-0';
  }

  yesLabel() { return '#label-other-household-member-anyone-else-0'; }

  no() {
    return '#other-household-member-anyone-else-1';
  }

  noLabel() { return '#label-other-household-member-anyone-else-1'; }

}
module.exports = new OtherHouseholdMemberAnyoneElseBlockPage();
