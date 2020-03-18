import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './pages/Products'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Route exact path='/' component={Products} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
