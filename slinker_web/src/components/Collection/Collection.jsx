/**
 * Voyage-2 Team-Bears-23
 * @date 08/10/2017
 *
 * @ticket SLNKR-016
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1
 *
 * @flow
 */
import React from 'react'
import CollectionHeader from './CollectionHeader';

type Props = {
  title: string,
  collapsed: boolean
};

const renderExpanded = (title: string) => (
  <div className="o-slinker-collection">
    <CollectionHeader title={title} />
    <span>This will show a list of cards</span>
  </div>
);

const renderCollapsed = (title: string) => (
  <div className="o-slinker-collection">
    <CollectionHeader title={title} />
  </div>
);

const Collection = ({ title, collapsed }: Props) => (
  collapsed ? renderCollapsed(title) : renderExpanded(title)
);

export default Collection;
