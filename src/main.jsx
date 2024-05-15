import React from 'react'
import ReactDOM from 'react-dom/client'
import "./reset.css"
import "./App.css"
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <App />

  </Provider>
)
