import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card from '../src/components/Card';
import Header from '../src/components/Header/Header';

import "../src/client/scss/style.scss";

storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));


storiesOf('Card', module)
  .add('with text', () => (
    <Card
      link="https://www.example.com"
      title="Example Link"
      description="An example link"
      collapsed={false}
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

storiesOf('Header', module)
  .add('with search field', () => (
    <Header />
  ));