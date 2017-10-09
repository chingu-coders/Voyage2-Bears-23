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
import CollectionCards from './CollectionCards';

type Props = {
  title: string,
  cards: Array<{
    link: string,
    title: string,
    description: string,
    collapsed: boolean,
  }>,
};

type State = {
  collapsed: boolean,
};

class Collection extends React.Component<Props, State> {
  state = {
    collapsed: true
  };

  onHeaderClick = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }));
  }

  render() {
    const { title, cards } = this.props;

    return (
      <div className="o-slinker-collection">
        <CollectionHeader handleHeaderClick={this.onHeaderClick} title={title} collapsed={this.state.collapsed} showExpandButton={cards ? true : false}/>
        { !this.state.collapsed && <CollectionCards cards={cards} /> }
      </div>
    );
  }
}

export default Collection;
