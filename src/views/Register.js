import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            redirect: null
        }
    }

    createNewUser = (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPass = e.target.confirmPass.value;

        if (password !== confirmPass){
            console.warn('Passwords must match')
            return
        }
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const requestBody = JSON.stringify({
            "first_name": firstName,
            "last_name": lastName,
            "username": username,
            "email": email,
            "password": password
        })

        fetch('http://cart-api-66.herokuapp.com/create-user', {
            method: 'POST',
            headers: myHeaders,
            body: requestBody
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                redirect: '/'
            })
        })
        .catch(err => console.error(err))

    }

    render() {
        return (
            this.state.redirect ? <Redirect to={this.state.redirect} /> :
            <div>
                <h4 className='text-center'>Create Your Kekambas Account Here:</h4>
                <form className='mx-5' onSubmit={this.createNewUser}>
                    <div className='form-group'>
                        <fieldset>
                            <label htmlFor='firstName'>First Name</label>
                            <input type='text' className='form-control' name='firstName' placeholder='First Name' />
                            <label htmlFor='lastName'>Last Name</label>
                            <input type='text' className='form-control' name='lastName' placeholder='Last Name' />
                            <label htmlFor='username'>Username</label>
                            <input type='text' className='form-control' name='username' placeholder='Username' />
                            <label htmlFor='email'>Email</label>
                            <input type='text' className='form-control' name='email' placeholder='Email' />
                            <label htmlFor='password'>Password</label>
                            <input type='password' className='form-control' name='password' placeholder='Password' />
                            <label htmlFor='confirmPass'>Confirm Password</label>
                            <input type='password' className='form-control' name='confirmPass' placeholder='Confirm Password' />
                        </fieldset>
                        <button type='submit' className='btn btn-outline-primary mt-3 w-100'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
