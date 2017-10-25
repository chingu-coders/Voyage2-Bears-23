/**
 * Voyage-2 Team-Bears-23
 * @date 10/10/2017
 *
 * @ticket SLNKR-017
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/issues/14
 *
 * @flow
 */
import React, { Component } from 'react';
import HeaderSearchField from './HeaderSearchField';
import HeaderTabs from './HeaderTabs';

type Props = {
  workspaces: Array<{
    id: number,
    name: string,
    channels: Array<{
      id: number,
      name: string,
      links: Array<{
        id: number,
        name: string,
      }>,
    }>,
  }>,
};

type State = {
  searchValue: string,
};

class Header extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  handleSearch = (input: string) => {
    this.setState(() => ({
      searchValue: input,
    }));
  }

  handleCancel = () => {
    this.setState(() => ({
      searchValue: '',
    }));
  }

  render() {
    const { workspaces } = this.props;

    const workspacesData = workspaces.map(workspace => {
      return {
        id: workspace.id,
        name: workspace.name,
        channelsNum: workspace.channels.length,
      };
    });

    return (
      <header className="o-slinker-header">
        <HeaderSearchField
          searchValue={this.state.searchValue}
          handleSearch={this.handleSearch}
          handleCancel={this.handleCancel} />
        <HeaderTabs workspacesData={workspacesData} />
      </header>
    );
  }
}

export default Header;
