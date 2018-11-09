// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class Attend18Page extends QuestionPage {

  constructor() {
    super('attend18');
  }

  stillAttending() {
    return '#attend18-answer-0';
  }

  stillAttendingLabel() { return '#label-attend18-answer-0'; }

  waitingForTermToReStart() {
    return '#attend18-answer-1';
  }

  waitingForTermToReStartLabel() { return '#label-attend18-answer-1'; }

  stoppedAttending() {
    return '#attend18-answer-2';
  }

  stoppedAttendingLabel() { return '#label-attend18-answer-2'; }

}
module.exports = new Attend18Page();
