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
import { render } from 'react-dom';
import Layout from 'components/Layout';

const app =  document.getElementById('app');
const run = () => {
  render(
    <Layout component={window.__INITIAL_STATE__} />,
    app
  );
};

window.addEventListener('DOMContentLoaded', run, false);
