// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class NoPrimaryMaritalStatusPage extends QuestionPage {

  constructor() {
    super('no-primary-marital-status');
  }

  neverMarried() {
    return '#no-primary-marital-status-answer-0';
  }

  neverMarriedLabel() { return '#label-no-primary-marital-status-answer-0'; }

  married() {
    return '#no-primary-marital-status-answer-1';
  }

  marriedLabel() { return '#label-no-primary-marital-status-answer-1'; }

  inARegisteredSameSexCivilPartnership() {
    return '#no-primary-marital-status-answer-2';
  }

  inARegisteredSameSexCivilPartnershipLabel() { return '#label-no-primary-marital-status-answer-2'; }

  separatedButStillLegallyMarried() {
    return '#no-primary-marital-status-answer-3';
  }

  separatedButStillLegallyMarriedLabel() { return '#label-no-primary-marital-status-answer-3'; }

  separatedButStillLegallyInASameSexCivilPartnership() {
    return '#no-primary-marital-status-answer-4';
  }

  separatedButStillLegallyInASameSexCivilPartnershipLabel() { return '#label-no-primary-marital-status-answer-4'; }

  divorced() {
    return '#no-primary-marital-status-answer-5';
  }

  divorcedLabel() { return '#label-no-primary-marital-status-answer-5'; }

  formerlyInASameSexCivilPartnershipWhichIsNowLegallyDissolved() {
    return '#no-primary-marital-status-answer-6';
  }

  formerlyInASameSexCivilPartnershipWhichIsNowLegallyDissolvedLabel() { return '#label-no-primary-marital-status-answer-6'; }

  widowed() {
    return '#no-primary-marital-status-answer-7';
  }

  widowedLabel() { return '#label-no-primary-marital-status-answer-7'; }

  survivingMemberOfASameSexCivilPartnership() {
    return '#no-primary-marital-status-answer-8';
  }

  survivingMemberOfASameSexCivilPartnershipLabel() { return '#label-no-primary-marital-status-answer-8'; }

}
module.exports = new NoPrimaryMaritalStatusPage();
