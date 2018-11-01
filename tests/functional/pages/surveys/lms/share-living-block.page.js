// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class ShareLivingBlockPage extends QuestionPage {

  constructor() {
    super('share-living-block');
  }

  yes() {
    return '#share-living-answer-0';
  }

  yesLabel() { return '#label-share-living-answer-0'; }

  no() {
    return '#share-living-answer-1';
  }

  noLabel() { return '#label-share-living-answer-1'; }

}
module.exports = new ShareLivingBlockPage();
