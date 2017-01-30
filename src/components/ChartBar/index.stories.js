import React from 'react'
import { storiesOf } from '@kadira/storybook'
import ChartBar from '.'

const props = {
  style: { height: 240, width: 100 }
}

storiesOf('ChartBar', module)
  .add('default', () => (
    <ChartBar {...props} />
  ))
  .add('reverse', () => (
    <ChartBar {...props} reverse />
  ))
  .add('palette', () => (
    <ChartBar {...props} palette="success" />
  ))
  .add('with label', () => (
    <ChartBar {...props} label="Label" />
  ))
  .add('with content', () => (
    <ChartBar {...props} content="Content" />
  ))
  .add('with content label', () => (
    <ChartBar {...props} content="Content" label="Label" />
  ))
  .add('with 50%', () => (
    <ChartBar {...props} percent={0.5} />
  ))
  .add('with 50% label', () => (
    <ChartBar {...props} percent={0.5} label="Label" />
  ))
  .add('with 50% content', () => (
    <ChartBar {...props} percent={0.5} content="Content" />
  ))
