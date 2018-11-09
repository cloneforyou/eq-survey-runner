// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class ShareCookingBlockPage extends QuestionPage {

  constructor() {
    super('share-cooking-block');
  }

  yes() {
    return '#share-cooking-answer-0';
  }

  yesLabel() { return '#label-share-cooking-answer-0'; }

  no() {
    return '#share-cooking-answer-1';
  }

  noLabel() { return '#label-share-cooking-answer-1'; }

}
module.exports = new ShareCookingBlockPage();
