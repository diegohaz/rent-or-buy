import React from 'react'
import styled from 'styled-components'

import RentOrBuyForm from 'containers/RentOrBuyForm'
import RentOrBuyChart from 'containers/RentOrBuyChart'

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin: 1rem;
  > * {
    width: calc(50% - 2rem);
    margin: 1rem;
  }
`

const App = () => {
  return (
    <Main>
      <RentOrBuyForm name="rentOrBuy" />
      <RentOrBuyChart form="rentOrBuy" />
    </Main>
  )
}

export default App
