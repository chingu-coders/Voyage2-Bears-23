/**
 * Voyage-2 Team-Bears-23
 * @date 09/10/2017
 *
 * @ticket SLNKR-016
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1
 *
 * @flow
 */
import React from 'react';
import Card from '../Card';

type Props = {
  cards: Array<{
    link: string,
    title: string,
    description: string,
    collapsed: boolean,
  }>,
};

const createCardsList = (card: {link: string, title: string, description: string, collapsed: boolean}) => (
  <Card
    key={card.link}
    link={card.link} 
    title={card.title} 
    description={card.description} 
    collapsed={card.collapsed} />
);

const CollectionCards = ({cards}: Props) => (
  <div className="o-slinker-collectioncards">
    { cards && cards.map(createCardsList) }
  </div>
);

export default CollectionCards;