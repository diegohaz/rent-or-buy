import React from 'react'
import { shallow } from 'enzyme'
import Chart from '.'

const wrap = (props = {}) => shallow(<Chart {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ children: 'foo' })
  expect(wrapper.contains('foo')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders title when passed in', () => {
  const wrapper = wrap({ title: 'bar' })
  expect(wrapper.contains('bar')).toBe(true)
})
