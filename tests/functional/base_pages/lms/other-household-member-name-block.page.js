// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class OtherHouseholdMemberNameBlockPage extends QuestionPage {

  constructor() {
    super('other-household-member-name-block');
  }

  otherHouseholdMemberFirstName() {
    return '#other-household-member-first-name';
  }

  otherHouseholdMemberFirstNameLabel() { return '#label-other-household-member-first-name'; }

  otherHouseholdMemberFirstNameLabelDescription() { return '#label-other-household-member-first-name > .label__description'; }

  otherHouseholdMemberLastName() {
    return '#other-household-member-last-name';
  }

  otherHouseholdMemberLastNameLabel() { return '#label-other-household-member-last-name'; }

  otherHouseholdMemberLastNameLabelDescription() { return '#label-other-household-member-last-name > .label__description'; }

}
module.exports = new OtherHouseholdMemberNameBlockPage();
