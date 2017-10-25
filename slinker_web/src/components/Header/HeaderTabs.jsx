/**
 * Voyage-2 Team-Bears-23
 * @date 10/10/2017
 *
 * @ticket SLNKR-017
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/issues/14
 *
 * @flow
 */
import React from 'react';
import { withState, compose } from 'recompose';

type Props = {
  workspacesData: Array<{
    id: number,
    name: string,
    channelsNum: number,
  }>,
  activeTabState: number,
  setActiveTabState: Function,
};

const enhance = compose(
  withState('activeTabState', 'setActiveTabState', 0)
);

const HeaderTabs = ({ workspacesData, activeTabState, setActiveTabState }: Props) => (
  <div className="o-slinker-headertabs">
    { workspacesData.map(workspace => 
        <div 
          key={workspace.id}
          className="o-header-tab">
          <button 
            className={`o-header-tab-button ${workspace.id === activeTabState 
              ? "active" 
              : ""}`}
            onClick={() => setActiveTabState(workspace.id)}>
            <span>{workspace.name}</span>
            <span className="o-channelnumber">{workspace.channelsNum > 0 && workspace.channelsNum}</span>
          </button>
        </div>
    ) }
  </div>
);

const EnhancedHeaderTabs = enhance(HeaderTabs);

export default EnhancedHeaderTabs;