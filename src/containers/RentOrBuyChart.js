import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getValues } from 'store/reducer'

import RentOrBuyChart from 'components/RentOrBuyChart'

const RentOrBuyChartContainer = props => <RentOrBuyChart {...props} />

RentOrBuyChartContainer.propTypes = {
  form: PropTypes.string.isRequired
}

const mapStateToProps = (state, { form }) => ({
  values: getValues(state, form)
})

export default connect(mapStateToProps)(RentOrBuyChartContainer)
