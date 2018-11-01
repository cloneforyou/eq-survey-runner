// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class NoPrimaryAttend18Page extends QuestionPage {

  constructor() {
    super('no-primary-attend18');
  }

  stillAttending() {
    return '#no-primary-attend18-answer-0';
  }

  stillAttendingLabel() { return '#label-no-primary-attend18-answer-0'; }

  waitingForTermToReStart() {
    return '#no-primary-attend18-answer-1';
  }

  waitingForTermToReStartLabel() { return '#label-no-primary-attend18-answer-1'; }

  stoppedAttending() {
    return '#no-primary-attend18-answer-2';
  }

  stoppedAttendingLabel() { return '#label-no-primary-attend18-answer-2'; }

}
module.exports = new NoPrimaryAttend18Page();
