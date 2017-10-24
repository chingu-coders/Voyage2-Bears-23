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
import { withState, compose } from 'recompose';

import CollectionHeader from './CollectionHeader';
import CollectionCards from './CollectionCards';

type Props = {
  title: string,
  cards: Array<{
    link: string,
    title: string,
    description: string,
    collapsed: boolean,
  }>,
  collectionCollapseState: boolean,
  setCollectionCollapseState: Function
};

const enhance = compose(
  withState('collectionCollapseState', 'setCollectionCollapseState', true)
);

const Collection = ({
  title,
  cards,
  collectionCollapseState,
  setCollectionCollapseState
}: Props) => (
  <div className="o-slinker-collection">
    <CollectionHeader handleHeaderClick={setCollectionCollapseState} title={title} collapsed={collectionCollapseState} showExpandButton={cards ? true : false}/>
    { !collectionCollapseState && <CollectionCards cards={cards} /> }
  </div>
);

const enhancedCollection = enhance(Collection);

export default enhancedCollection;
