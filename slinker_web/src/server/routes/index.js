/**
 * Voyage-2 Team-Bears-23
 * @date 26/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 * @flow
 */
import log from 'loglevel';
import config from 'server/../config';
// import slinkerRouter from 'server/routes/slinker';
import routes from 'server/routes/routes';

const mount = (app: Object) => {

  app.get('/', (req, res) => {
    log.debug('redirecting');
    return res.redirect(config.server.context_root);
  });

  app.use(config.server.context_root, routes);

  // just a simple browser error message when running locally
  (process.env.NODE_ENV === 'development' &&
    app.use((req, res) => {
      res.status(404);
      res.type('txt').send('Not found');
    })
  );

};

export default mount;
