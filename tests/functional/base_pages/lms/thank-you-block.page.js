// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class ThankYouBlockPage extends QuestionPage {

  constructor() {
    super('thank-you-block');
  }

  phoneNumber() {
    return '#phone-number';
  }

  phoneNumberLabel() { return '#label-phone-number'; }

  phoneNumberLabelDescription() { return '#label-phone-number > .label__description'; }

  email() {
    return '#email';
  }

  emailLabel() { return '#label-email'; }

  emailLabelDescription() { return '#label-email > .label__description'; }

  confirmEmail() {
    return '#confirm-email';
  }

  confirmEmailLabel() { return '#label-confirm-email'; }

  confirmEmailLabelDescription() { return '#label-confirm-email > .label__description'; }

}
module.exports = new ThankYouBlockPage();
