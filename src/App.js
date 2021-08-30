import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './views/Home';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      products: []
    }
  }

  componentDidMount(){
    console.log('Hello')
  }

  
  render() {
    return (
      <div className='bg-secondary'>
        <Nav isLoggedIn={this.state.isLoggedIn} />
        <div className='container bg-white border-start border-end vh-100'>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </div>
    )
  }
}

