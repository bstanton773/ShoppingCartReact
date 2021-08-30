import React, { Component } from 'react'
import LoggedInNav from './LoggedInNav'
import LoggedOutNav from './LoggedOutNav'

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Kekambas</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">My Cart</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        {this.props.isLoggedIn ? (<LoggedInNav />) : (<LoggedOutNav />)}
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
