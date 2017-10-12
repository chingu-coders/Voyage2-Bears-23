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
  workspaces: Array<{
    id: number,
    name: string,
  }>,
};

const setWorkspaces = (workspace: {id: number, name: string}) => (
  <div 
    key={workspace.id}
    className="o-header-tab">
    <button className="o-header-tab-button">
      {workspace.name}
    </button>
  </div>
);

const HeaderTabs = ({ workspaces }: Props) => (
  <div className="o-slinker-headertabs">
    { workspaces.map(setWorkspaces) }
  </div>
);

export default HeaderTabs;