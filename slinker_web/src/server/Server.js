/**
 * Voyage-2 Team-Bears-23
 * @date 26/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 * @flow
 */
import express from 'express';
import compression from 'compression';
import {
  middleware,
  pageNotFoundHandler,
  // pageErrorHandler,
  errorHandlers
} from 'server/middleware';
import { slinkerBot } from '../../../slinker_bot/build';
import https from 'https';
import ssl from 'server/helpers/ssl';
import routes from 'server/routes';
import config from '../config';
import log from 'loglevel';

class Server {
    port: string;
    app: Function;


    constructor(port: string) {
      this.port = port;
      this.app = express();
    }

    boot() {
      this.app.use(compression());
      this.app.use(config.server.context_root, express.static('build/client/public/', {
        redirect: false
      }));

      // load middleware and routes
      middleware(this.app);
      routes(this.app);
      slinkerBot();

      // Setup error handlers
      pageNotFoundHandler(this.app);
      // pageErrorHandler(this.app); // TODO - fix pageErrorHandler - static error handling m/ware
      errorHandlers(this.app);
    }

    serve() {
      log.info('Starting Server on Port:{port}', {
        port: this.port
      });

      try {
        // TODO - enable ssl, currently not working due to cert/key
        ssl(https, this.app, this.port);
        log.info('SSL Server Listening on Port {port}', {port: this.port});
      } catch (err) {
        this.app.listen(this.port);
        log.warn('Unable to start server with SSL');
        log.info('Non-SSL Server Listening on Port {port}', {port: this.port});
      }
  }
}

export default Server;
