/**
 * Voyage-2 Team-Bears-23
 * @date 26/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 * @flow
 */
import 'app-module-path/register';
import server from './server';
import log from 'loglevel';

global.log = log;

process.env.__app_name = 'slinker-web--app';

try {
  server.boot();
  server.serve();
} catch (e) {
  log.error(e);
}
