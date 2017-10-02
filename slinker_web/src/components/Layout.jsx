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
import Page from 'components/Page';
import type { ConfigType } from 'components/../config';

type Props = {
  component: {
    name: string,
    params: {
      contextRoot: string
    },
    config: ConfigType
  }
}

const Layout = ({ component }: Props) => (
  <div className="container">
    <Page { ...component } />
  </div>
);

export default Layout;
