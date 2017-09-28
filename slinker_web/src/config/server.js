/**
 * Voyage-2 Team-Bears-23
 * @date 26/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 * @flow
 */
export type ServerType = {
  port: string,
  context_root: string,
  context_api: string}

const server: ServerType = {
  port: process.env.PORT || '3000',
  context_root: '/slinker',
  context_api: ''
};

server.context_api = `${server.context_root}api`;

export default server;
