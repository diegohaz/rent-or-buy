import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { getValues, getAreas } from 'store/reducer'
import { formRegister, formUnregister, formSetValue, areas } from 'store/actions'

import RentOrBuyForm from 'components/RentOrBuyForm'

class RentOrBuyFormContainer extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    registerForm: PropTypes.func.isRequired,
    unregisterForm: PropTypes.func.isRequired,
    requestAreas: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.registerForm()
    this.props.requestAreas()
    this.props.onChange('area', 'RJ')
    this.props.onChange('years', 10)
    this.props.onChange('annualTax', 11.5)
  }

  componentWillUnmount() {
    this.props.unregisterForm()
  }

  render() {
    const { name, registerForm, unregisterForm, ...props } = this.props
    return <RentOrBuyForm {...props} />
  }
}

const mapStateToProps = (state, { name }) => ({
  values: getValues(state, name),
  areas: getAreas(state)
})

const mapDispatchToProps = (dispatch, { name }) => ({
  onChange: (fieldName, value) => dispatch(formSetValue(name, fieldName, value)),
  registerForm: () => dispatch(formRegister(name)),
  unregisterForm: () => dispatch(formUnregister(name)),
  requestAreas: () => dispatch(areas.request())
})

export default connect(mapStateToProps, mapDispatchToProps)(RentOrBuyFormContainer)
