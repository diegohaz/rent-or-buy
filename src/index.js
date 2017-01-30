import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import configureStore from 'store/configure'

import App from 'components/App'

const store = configureStore({})
const root = document.getElementById('app')

const renderApp = () => (
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>
)

render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
}
