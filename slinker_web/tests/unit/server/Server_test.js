/**
 * Voyage-2 Team-Bears-23
 * @date 27/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 */
import Server from 'server/Server';

describe('server/Server', function () {
  it('should accept a port', function () {
    (new Server(1234)).port.should.equal(1234);
  });
});
