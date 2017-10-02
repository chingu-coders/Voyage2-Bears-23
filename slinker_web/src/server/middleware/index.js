/**
 * Voyage-2 Team-Bears-23
 * @date 26/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 * @flow
 */
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import pageNotFoundHandlerMiddleware from 'server/middleware/PageNotFoundHandlerMiddleware';
import errorhandler from 'errorhandler';
// TODO import static error handling m/ware

const  middleware = (app: Object) => {

  const middlewares = [
    cors(),
    bodyParser.urlencoded({
      extended: true
    }),
    bodyParser.json(),
    favicon('build/client/public/images/favicon.ico'),
    cookieParser()
  ];

  middlewares.map(middleware => app.use(middleware));
};

const pageNotFoundHandler = (app: Object) => {
  app.use(pageNotFoundHandlerMiddleware());
};

// TODO import static error handling m/ware for non 404 errors
// const pageErrorHandler = (app: Object) => {
//   if (process.env.NODE_ENV !== 'development') {
//     // const opts = {log: log, basePath: ''};
//     // app.use(setupStaticErrorMiddleware(opts));
//   }
// };

const errorHandlers = (app: Object) => {
  if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler());
  }
};

export {
  middleware,
  pageNotFoundHandler,
  // pageErrorHandler,
  errorHandlers
};
