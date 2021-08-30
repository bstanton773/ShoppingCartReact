import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './views/Home';

export default class App extends Component {
  render() {
    return (
      <div className='bg-secondary'>
        <Nav />
        <div className='container bg-white border-start border-end vh-100'>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </div>
    )
  }
}

