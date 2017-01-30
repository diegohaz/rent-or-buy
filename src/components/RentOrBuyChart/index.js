import React, { PropTypes } from 'react'
import styled from 'styled-components'
import interest from 'interestjs'
import { currency } from 'services/number'

import Chart from '../Chart'
import ChartBar from '../ChartBar'

const StyledChart = styled(Chart)`
  height: 360px;
`

const RentOrBuyChart = ({ values, ...props }) => {
  if (!values || !values.buy || !values.rental || !values.years || !values.annualTax) {
    return <StyledChart title="Custo total" {...props} />
  }
  const { sum: rentalTotal } = interest(values.rental, values.years * 12, values.annualTax)
  return (
    <StyledChart {...props}>
      <ChartBar
        label="Alugar"
        palette={rentalTotal > values.buy ? 'danger' : 'success'}
        percent={rentalTotal > values.buy ? 1 : rentalTotal / values.buy}
        content={currency(rentalTotal)}
      />
      <ChartBar
        label="Comprar"
        palette={values.buy > rentalTotal ? 'danger' : 'success'}
        percent={values.buy > rentalTotal ? 1 : values.buy / rentalTotal}
        content={currency(values.buy)}
      />
    </StyledChart>
  )
}

RentOrBuyChart.propTypes = {
  values: PropTypes.shape({
    buy: PropTypes.number,
    rental: PropTypes.number,
    years: PropTypes.number,
    annualTax: PropTypes.number
  })
}

export default RentOrBuyChart
