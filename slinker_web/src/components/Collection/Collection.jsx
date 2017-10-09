/**
 * Voyage-2 Team-Bears-23
 * @date 08/10/2017
 *
 * @ticket SLNKR-016
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1
 *
 * @flow
 */
import React from 'react'
import CollectionHeader from './CollectionHeader';

type Props = {
  title: string,
};

type State = {
  collapsed: boolean,
};

class Collection extends React.Component<Props, State> {
  state = {
    collapsed: false    
  };

  onHeaderClick = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }));
  }

  render() {
    const { title } = this.props;

    return (
      <div className="o-slinker-collection">
        <CollectionHeader handleHeaderClick={this.onHeaderClick} title={title} collapsed={this.state.collapsed} />
        { this.state.collapsed && <span>This will show a list of cards</span> }
      </div>
    );
  }
}

export default Collection;
