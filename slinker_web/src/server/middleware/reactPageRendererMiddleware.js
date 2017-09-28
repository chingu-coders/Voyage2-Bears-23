/**
 * Voyage-2 Team-Bears-23
 * @date 26/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 * @flow
 */
import React from 'react';
import { renderToString } from 'react-dom/server';

type ReactServerSideRender = (
  config: Object,
  preRender?: Function
) => (req: Object, res: Object, next: Function) => void;

const reactPageRendererMiddleware: ReactServerSideRender = (config, preRender) =>

  (req, res, next) => {

    if (req.pageContent) {
      if (typeof preRender === 'function') {
        preRender(req, res);
      }
      const initialView = renderToString(req.pageContent);

      return res.status(200).end(renderFullPage(initialView, req.initialState, config));
    }
    next();
  };

const renderFullPage = (html, initialState, config) =>
  `<!DOCTYPE html>
    <html>
      <!--[if IE 9]><html lang="en" class="ie9"><![endif]-->
      <!--[if gt IE 9]><!--><html lang="en"><!--<![endif]-->
      <!--[if gt IE 8]><!-->
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name="theme-color" content="#823a8c" />
        <link type="text/css" rel="stylesheet" href="${config.server.context_root}/css/style.css">
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState.component)};
        </script>
        <script src="${config.server.context_root}/js/app.js"></script>
      </body>
    </html>`;

export default reactPageRendererMiddleware;
