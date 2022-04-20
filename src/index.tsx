import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
