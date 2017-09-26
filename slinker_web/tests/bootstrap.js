/**
 * Voyage-2 Team-Bears-23
 * @date 27/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 */
require('app-module-path').addPath(__dirname + '/../src/');
require('app-module-path').addPath(__dirname);

// Airbnb mocha jsdom setup
require('babel-register')();

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
// end - airbnb mocha jsdom setup

global.sinon = require('sinon');

var sinonStubPromise = require('sinon-stub-promise');
sinonStubPromise(global.sinon);

global.shallow = require('enzyme').shallow;
global.mount = require('enzyme').mount;

global.chai = require('chai');
global.chai.use(require('chai-as-promised'));
global.should = chai.should();
global.expect = chai.expect;
global.assert = chai.assert;
chai.use(require('chai-enzyme')());

global.sinon.assert.expose(chai.assert, { prefix: '' });
global.chai.use(require('sinon-chai'));

global.request = require('supertest');

global.log = require('loglevel');

global.React = require('react');

require('dotenv').config({path: '.env.test'});

