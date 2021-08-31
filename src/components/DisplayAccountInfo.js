import React, { Component } from 'react'

export default class DisplayAccountInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card-header">
                    General Account Information
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        First Name: <strong>{this.props.userInfo.first_name}</strong> 
                    </li>
                    <li className="list-group-item">
                        Last Name: <strong>{this.props.userInfo.last_name}</strong> 
                    </li>
                    <li className="list-group-item">
                        Username: <strong>{this.props.userInfo.username}</strong> 
                    </li>
                    <li className="list-group-item">
                        Email: <strong>{this.props.userInfo.email}</strong> 
                    </li>
                    <li className="list-group-item">
                        <button className="btn btn-secondary w-100" onClick={this.props.setEditState}>Edit</button>
                    </li>
                </ul>
                
            </React.Fragment>
        )
    }
}
