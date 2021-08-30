import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return (
            <div className={`alert alert-${this.props.category} alert-dismissible fade show`} role="alert">
                <strong>{this.props.message}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={this.props.clearMessage}></button>
            </div>
        )
    }
}
