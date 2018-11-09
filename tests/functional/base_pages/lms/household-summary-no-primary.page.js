// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class HouseholdSummaryNoPrimaryPage extends QuestionPage {

  constructor() {
    super('household-summary-no-primary');
  }

  otherHouseholdMemberFirstNameNoPrimaryEdit(index = 1) { return '[data-qa="other-household-member-first-name-no-primary-' + index + '-edit"]'; }

  otherHouseholdMemberFirstNameNoPrimaryLabel(index = 1) { return '[data-qa="other-household-member-first-name-no-primary-' + index + '-label"]'; } 

  studentHouseholdMemberFirstNameNoPrimaryEdit(index = 1) { return '[data-qa="student-household-member-first-name-no-primary-' + index + '-edit"]'; }

  studentHouseholdMemberFirstNameNoPrimaryLabel(index = 1) { return '[data-qa="student-household-member-first-name-no-primary-' + index + '-label"]'; } 

}
module.exports = new HouseholdSummaryNoPrimaryPage();
