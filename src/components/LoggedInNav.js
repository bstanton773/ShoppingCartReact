import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LoggedInNav extends Component {
    render() {
        return (
            <li className='nav-item'>
                <Link to='/' className="nav-link">Logout</Link>
            </li>
        )
    }
}
