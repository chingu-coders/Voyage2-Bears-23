/**
 * Voyage-2 Team-Bears-23
 * @date 27/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 */
import server from 'server';
import Server from 'server/Server';

describe('server/index', function () {
  it('should return an instance of Server', function () {
    server.should.be.an.instanceOf(Server);
  });
});
