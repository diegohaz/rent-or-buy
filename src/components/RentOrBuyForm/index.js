import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { currency, percentage } from 'services/number'

import Heading from '../Heading'
import Field from '../Field'

const Form = styled.form`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class RentOrBuyForm extends React.Component {
  static propTypes = {
    values: PropTypes.shape({
      area: PropTypes.string,
      rental: PropTypes.number,
      buy: PropTypes.number,
      years: PropTypes.number,
      annualTax: PropTypes.number
    }).isRequired,
    areas: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired
  }

  handleChange = (event) => {
    event.stopPropagation()
    const value = event.target.type === 'range' ? event.target.valueAsNumber : event.target.value
    this.props.onChange(event.target.name, value)
  }

  render() {
    const { values, areas, ...props } = this.props
    return (
      <Form {...props}>
        <Heading level={2}>Comprar ou alugar?</Heading>
        <Field
          name="area"
          label="Selecione seu estado"
          type="select"
          value={values.area || ''}
          onChange={this.handleChange}
        >
          ${areas.map(area => <option key={area} value={area}>{area}</option>)}
        </Field>
        <Field
          name="rental"
          label={`Valor do aluguel por mês: ${currency(values.rental)}`}
          type="range"
          min={100}
          max={10000}
          step={10}
          value={values.rental || 0}
          onChange={this.handleChange}
        />
        <Field
          name="buy"
          label={`Valor do imóvel para comprar: ${currency(values.buy)}`}
          type="range"
          min={10000}
          max={2000000}
          step={1000}
          value={values.buy || 0}
          onChange={this.handleChange}
        />
        <Field
          name="years"
          label={`Quanto tempo você irá morar? ${values.years} anos`}
          type="range"
          min={1}
          max={30}
          value={values.years || 0}
          onChange={this.handleChange}
        />
        <Field
          name="annualTax"
          label={`Taxa de juros anual: ${percentage(values.annualTax)}`}
          type="range"
          min={0.5}
          max={25}
          step={0.1}
          value={values.annualTax || 0}
          onChange={this.handleChange}
        />
      </Form>
    )
  }
}

export default RentOrBuyForm
