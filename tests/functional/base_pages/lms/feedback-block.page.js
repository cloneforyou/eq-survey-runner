// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class FeedbackBlockPage extends QuestionPage {

  constructor() {
    super('feedback-block');
  }

  answer() {
    return '#feedback-answer';
  }

  answerLabel() { return '#label-feedback-answer'; }

  answerLabelDescription() { return '#label-feedback-answer > .label__description'; }

}
module.exports = new FeedbackBlockPage();
