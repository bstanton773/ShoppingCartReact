import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: localStorage.getItem('token') !== null,
            products: []
        }
    }

    componentDidMount(){
        console.log('Hello')
    }

    logUserIn = (e) => {
        e.preventDefault();
        console.log(e)
        const username = e.target.username.value;
        const password = e.target.password.value;

        let myHeaders = new Headers();
        const credentials = btoa(`${username}:${password}`);
        myHeaders.append('Authorization', 'Basic ' + credentials);

        fetch('http://cart-api-66.herokuapp.com/tokens', {
            method: 'POST',
            headers: myHeaders
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                isLoggedIn: true
             })
             localStorage.setItem('token', data.token)
            }
        )
        .catch(err => console.error(err))
    }

  
    render() {
        return (
        <div className='bg-secondary'>
            <Nav isLoggedIn={this.state.isLoggedIn} />
            <div className='container bg-white border-start border-end vh-100'>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' render={() => <Login logUserIn={this.logUserIn} />}/>
            </Switch>
            </div>
        </div>
        )
    }
}

