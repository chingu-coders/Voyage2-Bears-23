/**
 * Voyage-2 Team-Bears-23
 * @date 26/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 * @flow
 */
import { Router as router } from 'express';
import React from 'react';
import Layout from 'server/../components/Layout';
import config from 'server/../config';
import api from './api';
import reactPageRendererMiddleware from 'server/middleware/reactPageRendererMiddleware';
import log from 'loglevel';

const slinkerRouter = router();

const slinkerPage = (req: Object, res: Object, next: Function) => {
  log.info('Setting Slinker landing page as page content');

  req.pageTitle = 'Slinker - The slack links bot';
  req.initialState = req.initialState || {};
  req.initialState.component = {
    name: 'Slinker',
    params: {
      contextRoot: config.server.context_root
    },
    config: config
  };

  req.pageContent = <Layout component={req.initialState.component} />;
  next();
};

const prePageMiddlewares = [
];

const postPageMiddleWares = [
  reactPageRendererMiddleware(config)
];

const pageMiddleWares = {
  'slinker': slinkerPage
};

slinkerRouter.use('/api', api);
slinkerRouter.get('/',  ...prePageMiddlewares, pageMiddleWares.slinker, ...postPageMiddleWares);

export {
  slinkerRouter as default,
  slinkerPage
};
