import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Message from './components/Message';
import Nav from './components/Nav'
import Home from './views/Home';
import Login from './views/Login';
import MyInfo from './views/MyInfo';
import Register from './views/Register';
import SingleProduct from './views/SingleProduct'

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
        fetch('http://cart-api-66.herokuapp.com/products')
        .then(res => res.json())
        .then(data => this.setState({products:data.products}))
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
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        this.setState({
            isLoggedIn: false
        })
        this.flashMessage('You have successfully logged out', 'success')
    }

  
    render() {
        return (
        <div className='bg-danger'>
            <Nav isLoggedIn={this.state.isLoggedIn} logUserOut={this.logUserOut}/>
            <div className='container bg-white pt-5 min-vh-100'>
                {this.state.message ? <Message message={this.state.message} category={this.state.category} clearMessage={this.clearMessage}/> : null}
                <Switch>
                    <Route exact path='/' render={() => <Home products={this.state.products} />} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' render={() => <Login logUserIn={this.logUserIn} isLoggedIn={this.state.isLoggedIn}/>} />
                    <Route exact path='/my-info' render={() => <MyInfo flashMessage={this.flashMessage} />} />
                    <Route exact path='/products/:id' component={SingleProduct} />
                </Switch>
            </div>
        </div>
        )
    }
}

