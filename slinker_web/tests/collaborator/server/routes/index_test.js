/**
 * Voyage-2 Team-Bears-23
 * @date 27/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 */
import routes from 'server/routes';
import appRoutes from 'server/routes/routes';

describe('server/routes/index', function () {
  it('should mount the main routes', function () {
    var app = {
      use: sinon.spy(),
      get: sinon.spy()
    };

    routes(app);

    app.get.should.have.been.calledWith('/', sinon.match.func);
    app.use.should.have.been.calledWith('/slinker', appRoutes);
  });
});
