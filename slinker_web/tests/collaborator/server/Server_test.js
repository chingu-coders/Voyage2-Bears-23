/**
 * Voyage-2 Team-Bears-23
 * @date 27/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 */
import reload from 'require-reload';
import replace from 'support/replace';

describe('server/Server', function () {
  var express, expressDummy, listenSpy;

  beforeEach(() => {
    listenSpy = sinon.spy();

    expressDummy = {
      get: function () {},
      use: function () {},
      listen: listenSpy,
    };

    express = function () {
      return expressDummy;
    };

    express.static = () => {};

    replace('express', express);
  });

  afterEach(function () {
    express = null;
    expressDummy = null;
    listenSpy = null;

    replace.reset();
  });

  it('should create a new express application', function () {
    const Server = reload('server/Server').default;
    (new Server(1234)).app.should.deep.equal(express());
  });

  it('should add the app middleware, pageNotFoundHandler & errorHandlers on boot', function () {
    let middleware = {
      middleware: sinon.spy(),
      pageNotFoundHandler: sinon.spy(),
      errorHandlers: sinon.spy()
    };

    replace('server/middleware', middleware);

    const Server = reload('server/Server').default;
    let server = new Server(1234);
    server.boot();

    middleware.middleware.should.have.been.called;
    middleware.middleware.should.have.been.calledWith(expressDummy);

    middleware.pageNotFoundHandler.should.have.been.called;
    middleware.pageNotFoundHandler.should.have.been.calledWith(expressDummy);

    middleware.errorHandlers.should.have.been.called;
    middleware.errorHandlers.should.have.been.calledWith(expressDummy);
  });

  it('should add app routes on boot', function () {
    let routes = sinon.spy();
    replace('server/routes', routes);

    const Server = reload('server/Server').default;
    let server = new Server(1234);
    server.boot();

    routes.should.have.been.called;
    routes.should.have.been.calledWith(expressDummy);
  });

  it('should serve the app on the specified port', function () {
    const Server = reload('server/Server').default;
    let server = new Server(1234);
    server.serve();

    listenSpy.should.have.been.called;
    listenSpy.should.have.been.calledWith(1234);
  });
});
