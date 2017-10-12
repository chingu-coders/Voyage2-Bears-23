/**
 * Voyage-2 Team-Bears-23
 * @date 10/10/2017
 *
 * @ticket SLNKR-017
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/issues/14
 *
 * @flow
 */
import React, { Component } from 'react'
import HeaderSearchField from './HeaderSearchField';
import HeaderTabs from './HeaderTabs';

type Props = {
  workspaces: Array<{
    id: number,
    name: string,
  }>,
};

type State = {
  searchValue: string,
  activeTab: number,
};

class Header extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      searchValue: '',
      activeTab: 0,
    };
  }

  handleSearch = (input: string) => {
    this.setState(prevState => ({
      searchValue: input,
    }));
  }

  handleCancel = () => {
    this.setState(prevState => ({
      searchValue: '',
    }));
  }

  handleTabSelect = (id: number) => {
    this.setState(prevState => ({
      activeTab: id,
    }));
  }

  render() {
    const { workspaces } = this.props;
    
    return (
      <header className="o-slinker-header">
        <HeaderSearchField 
          searchValue={this.state.searchValue} 
          handleSearch={this.handleSearch}
          handleCancel={this.handleCancel} />
        <HeaderTabs 
          workspaces={workspaces} 
          activeTab={this.state.activeTab}
          handleTabSelect={this.handleTabSelect}/>
      </header>
    );
  }
}

export default Header;
