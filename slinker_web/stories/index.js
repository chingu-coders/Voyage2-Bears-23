import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card from '../src/components/Card';
import Collection from '../src/components/Collection/Collection';
import Header from '../src/components/Header/Header';
import { cardsMockData, tabsMockData } from './mockData';

import "../src/client/scss/style.scss";

storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));


storiesOf('Card', module)
  .add('expanded mode', () => (
    <Card
      link="https://www.example.com"
      title="Example Link"
      description="An example link"
      collapsed={false}
    />
  ))
  .add('expanded with hover', () => (
    <Card
      link="https://www.example.com"
      title="Example Link"
      description="An example link"
      collapsed={false}
      cardHoverState={true}
      setCardHoverState={() => {}}
    />
  ))
  .add('collapsed mode', () => (
    <Card
      link="https://www.example.com"
      title="Example Link"
      description="An example link"
      collapsed={true}
    />
  ));

storiesOf('Collection', module)
  .add('without Cards', () => (
    <Collection
      title="resource-treasure"
    />
  ))
  .add('with Cards', () => (
    <Collection
      title="resource-treasure"
      cards={cardsMockData}
    />
  ))
  .add('with multiple Collections w/o Cards', () => (
    <div>
      <Collection
        title="community-chat"
      />
      <Collection
        title="resources-treasure"
      />
      <Collection
        title="ask-for-help-here"
      />
    </div>
  ))
  .add('with multiple Collections with Cards', () => (
    <div>
      <Collection
        title="community-chat"
        cards={cardsMockData}
      />
      <Collection
        title="resources-treasure"
        cards={cardsMockData}
      />
      <Collection
        title="ask-for-help-here"
        cards={cardsMockData}
      />
    </div>
  ));

storiesOf('Header', module)
  .add('with search field and tabs', () => (
    <Header workspaces={tabsMockData} />
  ));
