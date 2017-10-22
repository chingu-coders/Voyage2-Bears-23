/**
 * Voyage-2 Team-Bears-23
 * @date 22/10/2017
 *
 * @ticket SLNKR-018
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/issues/17
 *
 * @flow
 */
import React, { Component } from 'react'

type Props = {
};

type State = {
};

class SplashHeader extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <header className="o-splash-header">
        <div className="header-logo"></div>
        <button>Add to Slack</button>
      </header>
    );
  }
}

export default SplashHeader;
