import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Login extends Component {

    render() {
        return (
            this.props.isLoggedIn ? <Redirect to='/' /> :
            <div>
                <h4 className='text-center'>Create Your Kekambas Account Here:</h4>
                <form className='mx-5' onSubmit={this.props.logUserIn}>
                    <div className='form-group'>
                        <fieldset>
                            <label htmlFor='username'>Username</label>
                            <input type='text' className='form-control' name='username' placeholder='Username' />
                            <label htmlFor='password'>Password</label>
                            <input type='password' className='form-control' name='password' placeholder='Password' />
                        </fieldset>
                        <input type='submit' className='btn btn-outline-primary mt-3 w-100' value='Log In'></input>
                    </div>
                </form>
            </div>
        )
    }
}
