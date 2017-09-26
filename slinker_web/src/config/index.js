/**
 * Voyage-2 Team-Bears-23
 * @date 26/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 * @flow
 */
// import { find, propEq } from 'ramda';
import server from './server';
import type { ServerType } from './server';

export type ConfigType = {
  appName: string,
  server: ServerType
}

const config: ConfigType = {
  appName: 'Slinker',
  server
};

export default config;
