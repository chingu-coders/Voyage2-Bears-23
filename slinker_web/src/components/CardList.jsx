/**
 * Voyage-2 Team-Bears-23
 * @date 08/10/2017
 *
 * @ticket SLNKR-013
 * @link https://trello.com/c/VM8EbP8T
 *
 * @flow
 */
import React from 'react';
import { compose, map } from "ramda";
import Card from './Card';


const Container = (children) => (
  <div className="panel panel-default">
    <div className="panel-body">{children}</div>
  </div>
);

const mapCards = (cards) => map(card => <Card {...card} />, cards);

const CardList = compose(Container, mapCards);

export default CardList;
