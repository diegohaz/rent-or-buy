import React from 'react'
import { storiesOf } from '@kadira/storybook'
import RentOrBuyChart from '.'

const props = {
  values: {
    buy: 100000,
    rental: 1500,
    years: 2,
    annualTax: 11.5
  }
}

storiesOf('RentOrBuyChart', module)
  .add('default', () => (
    <RentOrBuyChart {...props} />
  ))
