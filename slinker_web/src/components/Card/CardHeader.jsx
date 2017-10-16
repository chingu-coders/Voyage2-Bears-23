/**
 * Voyage-2 Team-Bears-23
 * @date 04/10/2017
 *
 * @ticket SLNKR-013
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-5023780
 *
 * @flow
 */
import React from 'react';
import { withState, compose } from 'recompose';

import EditSVG from '../../client/public/images/icon-edit.svg';
import DeleteSVG from '../../client/public/images/icon-delete.svg';

type Props = {
  title: string,
  cardHoverState: boolean,
  iconHoverState: boolean,
  setIconHoverState: Function
};

const pencilIcon = () => <EditSVG />;

const deleteIcon = () => <DeleteSVG />;

const enhance = compose(
  withState('iconHoverState', 'setIconHoverState', false)
);

const CardHeader = (
  {
    title,
    cardHoverState,
    iconHoverState,
    setIconHoverState
  }: Props) => (
  <span
    className='o-slinker-cardheader'
    onMouseOver={() => setIconHoverState(true)}
    onMouseOut={() => setTimeout(() => { setIconHoverState(false) }, 300)}
  >
    <span className="o-title">{title}</span>
    {(cardHoverState || iconHoverState) &&
      (<span className="o-icon o-icon__delete">{deleteIcon()}</span>)}
    {(cardHoverState || iconHoverState) &&
      (<span className="o-icon o-icon__edit">{pencilIcon()}</span>)}
  </span>
);

const EnhancedCardHeader = enhance(CardHeader);

export default EnhancedCardHeader;
