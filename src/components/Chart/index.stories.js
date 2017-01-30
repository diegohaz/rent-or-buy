import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Chart from '.'
import ChartBar from '../ChartBar'

storiesOf('Chart', module)
  .add('default', () => (
    <Chart style={{ height: 200 }}>
      <ChartBar label="Label" content="Content" percent={0.5} />
      <ChartBar label="Label" percent={0.75} />
      <ChartBar label="Label" percent={1} palette="danger" />
      <ChartBar percent={0.25} palette="success" />
    </Chart>
  ))
  .add('with title', () => (
    <Chart style={{ height: 200 }} title="Title">
      <ChartBar label="Label" content="Content" percent={0.5} />
      <ChartBar label="Label" percent={0.75} />
      <ChartBar label="Label" percent={1} palette="danger" />
      <ChartBar percent={0.25} palette="success" />
    </Chart>
  ))
