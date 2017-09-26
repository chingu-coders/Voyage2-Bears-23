/**
 * Voyage-2 Team-Bears-23
 * @date 27/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 */
import replace from 'support/replace';
import reload from 'require-reload';
import slinkerRouter from 'server/routes/slinker';

import reactPageRendererMiddleware from 'server/middleware/ReactPageRendererMiddleware';

xdescribe('server/routes/slinker', function () {
  let express, spy;

  let reactPageRendererMatcher = sinon.match((func) => {
    return func.toString() === reactPageRendererMiddleware().toString();
  }, 'expected to bind reactPageRendererMiddleware');

  beforeEach(function () {
    spy = sinon.spy();

    express = {
      Router: function () {
        return {
          get: spy,
          use: spy
        };
      }
    };

    replace('express', express);

    reload('server/routes/slinker');
  });

  afterEach(function () {
    express = null;
    spy = null;

    replace.reset();
  });

  it('should mount slinker at /slinker', function () {
    console.log(spy);
    spy.should.have.been.calledWith(
      '/',
      slinkerRouter,
      reactPageRendererMatcher
    );
  });

  it('should mount api at /api', function () {
    console.log(spy.args);
    spy.should.have.been.calledWith(
      '/api',
      {}
    );
  });

});
