import React from 'react'
import { shallow } from 'enzyme'
import RentOrByForm from '.'

const areas = ['RJ', 'SP']

const values = {
  area: 'rj',
  rental: 2000,
  buy: 300000,
  years: 2,
  annualTax: 11.5
}

const onChange = jest.fn()

const defaultProps = { areas, values, onChange }

const wrap = (props = {}) => shallow(<RentOrByForm {...defaultProps} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('calls onChange when field changes', () => {
  const wrapper = wrap()
  const field = wrapper.find('Field').first()
  expect(onChange).not.toBeCalled()
  const target = {
    name: 'area',
    value: 'rj'
  }
  field.simulate('change', { target, stopPropagation: jest.fn() })
  expect(onChange).toHaveBeenCalledWith('area', 'rj')
})
