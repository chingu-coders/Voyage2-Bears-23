/**
 * Voyage-2 Team-Bears-23
 * @date 26/09/2017
 *
 * @ticket SLNKR-004
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4881227
 *
 */

function Page() {
  this.url = `${browser.options.baseUrl}`;
  this.expectedUrl = `${browser.options.baseUrl}`;
  this.headerElement = 'h1.o-header';
  this.navElement = 'div.o-navigation';
}

Page.prototype.open = function () {
  browser.url(this.url);
};

Page.prototype.constructor = Page;

export default Page;
