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
  activeTab: number,
  handleTabSelect: Function,
};

const HeaderTabs = ({ workspaces, activeTab, handleTabSelect }: Props) => (
  <div className="o-slinker-headertabs">
    { workspaces.map(workspace => 
        <div 
          key={workspace.id}
          className="o-header-tab">
          <button 
            className={`o-header-tab-button ${workspace.id === activeTab 
              ? "active" 
              : ""}`}
            onClick={() => handleTabSelect(workspace.id)}>
            {workspace.name}
          </button>
        </div>
    ) }
  </div>
);

export default HeaderTabs;