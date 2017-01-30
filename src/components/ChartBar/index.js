import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { get } from 'styled-tools'

const Wrapper = styled.div`
  display: flex;
  font-family: ${font('primary')};
  height: 100%;
`

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${props => props.percent * 100}%;
  min-height: 4em;
  width: 100%;
  margin-top: auto;
  transition: height 250ms ease-in-out;
  will-change: height;
  &:before {
    content: '${get('label')}';
    color: ${palette('grayscale', 1)};
    font-size: 1em;
    height: 1.5em;
  }
  &:after {
    flex: 1;
    width: 100%;
    content: '${get('content')}';
    background-color: ${palette(1)};
    color: ${palette('grayscale', 0, true)};
    text-align: center;
    padding: 0.5rem;
    box-sizing: border-box;
    transition: background-color 250ms ease-in-out;
  }
`

const ChartBar = ({ label, content, percent, ...props }) => {
  const { palette, reverse } = props
  return (
    <Wrapper {...props}>
      <Bar {...{ label, percent, content, palette, reverse }} />
    </Wrapper>
  )
}

ChartBar.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  label: PropTypes.string,
  content: PropTypes.string,
  percent: PropTypes.number
}

ChartBar.defaultProps = {
  palette: 'primary',
  percent: 1
}

export default ChartBar
