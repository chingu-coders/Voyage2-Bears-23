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

import type { ConfigType } from 'components/../config';

type Props = {
  config: ConfigType
};

const Slinker = ({ config }: Props) => (
    <main role="main">

      <h1 className="o-header">{config.appName}</h1>

      <div className="o-links-container">
        <h1>List of links goes here</h1>
      </div>

    </main>
);

export default Slinker;
