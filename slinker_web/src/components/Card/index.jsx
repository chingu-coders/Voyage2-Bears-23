/**
 * Voyage-2 Team-Bears-23
 * @date 04/10/2017
 *
 * @ticket SLNKR-013
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-5023780
 *
 * @flow
 */
import React from 'react'
import CardHeader from './CardHeader';
import { withState, compose } from 'recompose';

type Props = {
  id: number,
  link: string,
  title: string,
  description: string,
  collapsed: boolean,
  cardHoverState: boolean,
  setCardHoverState: Function
};

const renderExpanded = (
  id: number,
  link: string,
  title: string,
  description: string,
  cardHoverState: boolean,
  setCardHoverState: Function
) => (
    <div
      key={id}
      className="o-slinker-card"
      onMouseOver={() => setCardHoverState(true)}
      onMouseOut={() => setCardHoverState(false)}
    >
      <CardHeader title={title} cardHoverState={cardHoverState} />
      <span className="o-hidden">{link}</span>
      <span>{description}</span>
    </div>
  );

const renderCollapsed = (
  id: number,
  title: string,
  cardHoverState: boolean,
  setCardHoverState: Function
) => (
    <div
      key={id}
      className="o-slinker-card--collapsed"
      onMouseOver={() => setCardHoverState(true)}
      onMouseOut={() => setTimeout(() => { setCardHoverState(false) }, 300)}
    >
      <CardHeader title={title} cardHoverState={cardHoverState} />
    </div>
  );

const enhance = compose(
  withState('cardHoverState', 'setCardHoverState', false)
);

const Card = (
  {
    id,
    link,
    title,
    description,
    collapsed,
    cardHoverState,
    setCardHoverState
  }: Props) => (
    collapsed ?
      renderCollapsed(id, title, cardHoverState, setCardHoverState) :
      renderExpanded(id, link, title, description, cardHoverState, setCardHoverState)
  );

const EnhancedCard = enhance(Card);

export default EnhancedCard;
