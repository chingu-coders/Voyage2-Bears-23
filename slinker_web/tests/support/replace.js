/**
 * Voyage-2 Team-Bears-23
 * @date 27/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 */
import mock from 'mock-require';
import reload from 'require-reload';

var replaced = [];

function replace (dependency, double) {
  replaced.push(dependency);
  mock(dependency, double);
  reload(dependency);
}

replace.reset = function () {
  mock.stopAll();

  for (let dependency of replaced) {
    reload(dependency);
  }
};

export default replace;
