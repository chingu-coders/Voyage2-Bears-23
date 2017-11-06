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
  withCards: boolean,
};

const renderWithCards = (
  title: string,
  collapsed: boolean,
  handleHeaderClick: Function
) => (
  <div className="o-slinker-collectionheader" onClick={() => handleHeaderClick(!collapsed)}>
    <h2 className="o-title">{title}</h2>
    { collapsed
        ? <button className="o-icon o-icon__expand">Expand or Collapse</button>
        : <button className="o-icon o-icon__collapse">Expand or Collapse</button>
    }
  </div>
);

const renderWithoutCards = (
  title: string
) => (
  <div className="o-slinker-collectionheader">
    <h2 className="o-title">{title}</h2>
  </div>
);

const CollectionHeader = ({
  title, 
  collapsed, 
  handleHeaderClick, 
  withCards
}: Props) => (
  withCards
    ? renderWithCards(title, collapsed, handleHeaderClick)
    : renderWithoutCards(title)
);

export default CollectionHeader;
