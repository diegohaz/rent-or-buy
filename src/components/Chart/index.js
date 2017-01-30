import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${font('primary')};
  border: 1px solid ${palette('grayscale', 1, true)};
  height: 100%;
  padding: 1rem 0.5rem 0;
`

const Title = styled.span`
  text-align: center;
`

const ChartCanvas = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  > * {
    flex: 1;
    margin: 0 0.5rem;
  }
`

const Chart = ({ title, children, ...props }) => {
  return (
    <Wrapper {...props} title={title}>
      {title && <Title>{title}</Title>}
      <ChartCanvas>{children}</ChartCanvas>
    </Wrapper>
  )
}

Chart.propTypes = {
  palette: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any
}

export default Chart
