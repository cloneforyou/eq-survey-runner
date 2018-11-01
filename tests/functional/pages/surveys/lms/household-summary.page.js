// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class HouseholdSummaryPage extends QuestionPage {

  constructor() {
    super('household-summary');
  }

  primaryHouseholdMemberFirstNameEdit(index = 1) { return '[data-qa="primary-household-member-first-name-' + index + '-edit"]'; }

  primaryHouseholdMemberFirstNameLabel(index = 1) { return '[data-qa="primary-household-member-first-name-' + index + '-label"]'; } 

  otherHouseholdMemberFirstNameEdit(index = 1) { return '[data-qa="other-household-member-first-name-' + index + '-edit"]'; }

  otherHouseholdMemberFirstNameLabel(index = 1) { return '[data-qa="other-household-member-first-name-' + index + '-label"]'; } 

  studentHouseholdMemberFirstNameEdit(index = 1) { return '[data-qa="student-household-member-first-name-' + index + '-edit"]'; }

  studentHouseholdMemberFirstNameLabel(index = 1) { return '[data-qa="student-household-member-first-name-' + index + '-label"]'; } 

}
module.exports = new HouseholdSummaryPage();
