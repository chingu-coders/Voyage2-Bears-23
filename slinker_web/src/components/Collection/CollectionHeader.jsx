/**
 * Voyage-2 Team-Bears-23
 * @date 08/10/2017
 *
 * @ticket SLNKR-016
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1
 *
 * @flow
 */
import React from 'react';

type Props = {
  title: string,
};


const CollectionHeader = ({title}: Props) => (
  <div className="o-slinker-collectionheader">
    <h2 className="o-title">{title}</h2>
    <span className="o-icon o-icon__open" />
  </div>
);

export default CollectionHeader;
