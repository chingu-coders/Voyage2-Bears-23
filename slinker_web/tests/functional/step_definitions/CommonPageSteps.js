/**
 * Voyage-2 Team-Bears-23
 * @date 26/09/2017
 *
 * @ticket SLNKR-004
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4881227
 *
 */

import Page from '../page_objects/Page';

export default function () {

  let page = new Page();

  this.Then(/^I should see the Page Header contains "([^"]*)"$/, (title) => {

    const elem = browser.element(page.headerElement);
    assert.equal(elem.getText(), title, `Page Header text does not match ${title}`);
  });

  this.Then(/^I should see the Page header$/, function () {

    let element = browser.element(page.headerElement);
    element.waitForVisible();
    assert.isTrue(element.isVisible(), `Element ${page.headerElement} not found`);
  });

  this.Then(/^I should see the page footer$/, function () {

    let element = browser.element(page.footerElement);
    element.waitForVisible();

    assert.isTrue(element.isVisible(), `Element ${page.footerElement} was not found`);
  });

}
