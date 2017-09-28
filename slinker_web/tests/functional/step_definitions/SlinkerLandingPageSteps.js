/**
 * Voyage-2 Team-Bears-23
 * @date 26/09/2017
 *
 * @ticket SLNKR-004
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4881227
 *
 */

import SlinkerLandingPage from '../page_objects/SlinkerLandingPage';

export default function () {

  const slinkerLandingPage = new SlinkerLandingPage();


  this.When(/^I visit the Slinker Landing page$/, function () {

    slinkerLandingPage.open();
  });

  this.Then(/^I should see the Navigation Bar$/, function () {

    const elem = browser.element(slinkerLandingPage.navElement);
    elem.waitForVisible();
    assert.isTrue(elem.isVisible(), `Element ${slinkerLandingPage.navElement} not found`);
  });


}
