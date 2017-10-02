/**
 * Voyage-2 Team-Bears-23
 * @date 26/09/2017
 *
 * @ticket SLNKR-004
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4881227
 *
 */

import Page from './Page';

function SlinkerLandingPage() {

  Page.call(this);

  this.url = `${browser.options.baseUrl}`;
  this.expectedUrl = `${browser.options.baseUrl}/comms__link-generator--app`;

}

SlinkerLandingPage.prototype = Object.create(Page.prototype);
SlinkerLandingPage.prototype.constructor = SlinkerLandingPage;

SlinkerLandingPage.prototype.openPage = function () {
  this.open();
  let urlMatch = browser.waitUntil(() => (browser.getUrl() === this.expectedUrl));
  assert.equal(browser.getUrl(), this.expectedUrl, 'actual URL does not match expected URL');
  assert.isTrue(urlMatch, 'actual URL does not match expected URL');
};

export default SlinkerLandingPage;
