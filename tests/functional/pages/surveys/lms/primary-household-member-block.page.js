// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class PrimaryHouseholdMemberBlockPage extends QuestionPage {

  constructor() {
    super('primary-household-member-block');
  }

  primaryHouseholdMemberFirstName() {
    return '#primary-household-member-first-name';
  }

  primaryHouseholdMemberFirstNameLabel() { return '#label-primary-household-member-first-name'; }

  primaryHouseholdMemberFirstNameLabelDescription() { return '#label-primary-household-member-first-name > .label__description'; }

  primaryHouseholdMemberLastName() {
    return '#primary-household-member-last-name';
  }

  primaryHouseholdMemberLastNameLabel() { return '#label-primary-household-member-last-name'; }

  primaryHouseholdMemberLastNameLabelDescription() { return '#label-primary-household-member-last-name > .label__description'; }

}
module.exports = new PrimaryHouseholdMemberBlockPage();
