import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LoggedInNav extends Component {
    render() {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    My Account
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/">My Info</Link></li>
                    <li><Link className="dropdown-item" to="/">My Cart</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link to='/' className="dropdown-item" onClick={this.props.logUserOut}>Logout</Link></li>
                </ul>
            </li>
        )
    }
}
