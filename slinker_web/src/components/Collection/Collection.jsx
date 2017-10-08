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

const renderExpanded = (title: string, collapsed: boolean) => (
  <div className="o-slinker-collection">
    <CollectionHeader title={title} collapsed={collapsed} />
    <span>This will show a list of cards</span>
  </div>
);

const renderCollapsed = (title: string, collapsed: boolean) => (
  <div className="o-slinker-collection">
    <CollectionHeader title={title} collapsed={collapsed} />
    </div>
);

const Collection = ({ title, collapsed }: Props) => (
  collapsed ? renderCollapsed(title, collapsed) : renderExpanded(title, collapsed)
);

export default Collection;
