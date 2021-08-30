import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoggedOutNav extends Component {
    render() {
        return (
            <React.Fragment>
                <li className='nav-item'>
                    <Link to='/register' className="nav-link">Sign Up</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/login' className="nav-link">Sign In</Link>
                </li>
            </React.Fragment>
        )
    }
}
