// >>> WARNING THIS PAGE WAS AUTO-GENERATED - DO NOT EDIT!!! <<<
const QuestionPage = require('../question.page');

class ShareLivingBlockNoPrimaryPage extends QuestionPage {

  constructor() {
    super('share-living-block-no-primary');
  }

  yes() {
    return '#share-living-answer-no-primary-0';
  }

  yesLabel() { return '#label-share-living-answer-no-primary-0'; }

  no() {
    return '#share-living-answer-no-primary-1';
  }

  noLabel() { return '#label-share-living-answer-no-primary-1'; }

}
module.exports = new ShareLivingBlockNoPrimaryPage();
