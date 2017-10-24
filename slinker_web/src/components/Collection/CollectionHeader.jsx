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
  collapsed: boolean,
  handleHeaderClick: Function,
  showExpandButton: boolean,
};

const CollectionHeader = ({title, collapsed, handleHeaderClick, showExpandButton}: Props) => (
  <div className="o-slinker-collectionheader" onClick={() => handleHeaderClick(!collapsed)}>
    <h2 className="o-title">{title}</h2>
    { showExpandButton && (
      collapsed
        ? <button className="o-icon o-icon__expand">Expand or Collapse</button>
        : <button className="o-icon o-icon__collapse">Expand or Collapse</button>
    )}
  </div>
);

export default CollectionHeader;
