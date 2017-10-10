/**
 * Voyage-2 Team-Bears-23
 * @date 10/10/2017
 *
 * @ticket SLNKR-017
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/issues/14
 *
 * @flow
 */
import React from 'react'
import HeaderSearchField from './HeaderSearchField';
import HeaderTabs from './HeaderTabs';

type Props = {
  workspaces: Array<{}>,
};

const Header = ({ workspaces }: Props) => (
  <header className="o-slinker-header">
    <HeaderSearchField />
    <HeaderTabs workspaces={workspaces} />
  </header>
);

export default Header;
