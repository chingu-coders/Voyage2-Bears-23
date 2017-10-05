/**
 * Voyage-2 Team-Bears-23
 * @date 04/10/2017
 *
 * @ticket SLNKR-013
 * @link https://trello.com/c/VM8EbP8T
 *
 * @flow
 */
import React from 'react'
import CardHeader from './CardHeader';
// import { withState} from 'recompose';

type Props = {
  link: string,
  title: string,
  description: string,
  collapsed: boolean
};

const renderExpanded = (link: string, title: string, description: string) => (
  <div className="o-slinker-card">
    <CardHeader title={title} />
    <span className="o-hidden">{link}</span>
    <span>{description}</span>
  </div>
);

const renderCollapsed = (title: string) => (
  <div className="o-slinker-card--collapsed">
    <CardHeader title={title} />
  </div>
);

const Card = ({ link, title, description, collapsed }: Props) => (
  collapsed ? renderCollapsed(title) : renderExpanded(link, title, description)
);

export default Card;
