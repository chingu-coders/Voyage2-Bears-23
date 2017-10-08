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
  <span className="o-slinker-collectionheader">
    <span className="o-title">{title}</span>
    <span className="o-icon o-icon__open" />
  </span>
);

export default CollectionHeader;
