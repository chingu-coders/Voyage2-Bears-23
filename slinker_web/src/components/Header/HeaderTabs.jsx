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

type Props = {
  workspaces: Array<{}>,
};
  
const HeaderTabs = ({ workspaces }: Props) => (
  <div className="o-slinker-headertabs">Tabs</div>
);

export default HeaderTabs;