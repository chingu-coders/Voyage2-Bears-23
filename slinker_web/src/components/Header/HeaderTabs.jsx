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
  workspacesData: Array<{
    id: number,
    name: string,
    channelsNum: number,
  }>,
  activeTab: number,
  handleTabSelect: Function,
};

const HeaderTabs = ({ workspacesData, activeTab, handleTabSelect }: Props) => (
  <div className="o-slinker-headertabs">
    { workspacesData.map(workspace => 
        <div 
          key={workspace.id}
          className="o-header-tab">
          <button 
            className={`o-header-tab-button ${workspace.id === activeTab 
              ? "active" 
              : ""}`}
            onClick={() => handleTabSelect(workspace.id)}>
            <span>{workspace.name}</span>
            <span className="o-channelnumber">{workspace.channelsNum > 0 && workspace.channelsNum}</span>
          </button>
        </div>
    ) }
  </div>
);

export default HeaderTabs;