import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Message from './components/Message';
import Nav from './components/Nav'
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: localStorage.getItem('token') !== null,
            products: [],
            message: null,
            category: null
        }
    }

    componentDidMount(){
        console.log('Hello')
    }

    flashMessage = (message, category='primary') => {
        this.setState({
            message: message,
            category: category
        })
    }

    clearMessage = () => {
        this.setState({
            message: null,
            category: null
        })
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
             this.flashMessage(`${username} has logged in`, 'success')
             localStorage.setItem('token', data.token)
             localStorage.setItem('user_id', data.user_id)
            }
        )
        .catch(err => console.error(err))
    }

    logUserOut = () => {
        localStorage.removeItem('token')
        this.setState({
            isLoggedIn: false
        })
        this.flashMessage('You have successfully logged out', 'success')
    }

  
    render() {
        return (
        <div className='bg-secondary'>
            <Nav isLoggedIn={this.state.isLoggedIn} logUserOut={this.logUserOut}/>
            <div className='container bg-white border-start border-end vh-100'>
                {this.state.message ? <Message message={this.state.message} category={this.state.category} clearMessage={this.clearMessage}/> : null}
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' render={() => <Login logUserIn={this.logUserIn} isLoggedIn={this.state.isLoggedIn}/>}/>
                </Switch>
            </div>
        </div>
        )
    }
}

