import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import RentOrBuyForm from '.'

const areas = ['RJ', 'SP']

const values = {
  area: 'rj',
  rental: 2000,
  buy: 300000,
  years: 2,
  annualTax: 11.5
}

const onChange = action('changed')

const props = { areas, values, onChange }

storiesOf('RentOrBuyForm', module)
  .add('default', () => (
    <RentOrBuyForm {...props} />
  ))
