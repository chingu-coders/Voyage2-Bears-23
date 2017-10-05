/**
 * Voyage-2 Team-Bears-23
 * @date 04/10/2017
 *
 * @ticket SLNKR-013
 * @link https://trello.com/c/VM8EbP8T
 *
 * @flow
 */
import React from 'react';

type Props = {
  title: string,
};


const CardHeader = ({title}: Props) => (
  <span className="o-slinker-cardheader">
    <span className="o-title">{title}</span>
    <span className="o-icon o-icon__delete" />
    <span className="o-icon o-icon__edit" />
  </span>
);

export default CardHeader;
