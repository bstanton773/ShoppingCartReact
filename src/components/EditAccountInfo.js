import React, { Component } from 'react'

export default class EditAccountInfo extends Component {
    updateAccountInfo = (e) =>{
        e.preventDefault();
        console.log(e);

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const username = e.target.username.value;
        const email = e.target.email.value;

        let myHeaders = new Headers();
        const token = localStorage.getItem('token')
        myHeaders.append('Authorization',  `Bearer ${token}`)
        myHeaders.append('Content-Type', 'application/json');

        const requestBody = JSON.stringify({
            "firstName": firstName,
            "lastName": lastName,
            "username": username,
            "email": email,
        })

        fetch('http://cart-api-66.herokuapp.com/update-user', {
            method: 'POST',
            headers: myHeaders,
            body: requestBody
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.props.setEditState()
            this.props.flashMessage(`Account Information has been updated for ${data.username}`, 'warning')
        })
        .catch(err => console.error(err));
    }


    render() {
        return (
            <form onSubmit={this.updateAccountInfo}>
                <div className='form-group mx-3'>
                    <fieldset>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' className='form-control' name='firstName' defaultValue={this.props.userInfo.first_name} />
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' className='form-control' name='lastName' defaultValue={this.props.userInfo.last_name} />
                        <label htmlFor='username'>Username</label>
                        <input type='text' className='form-control' name='username' defaultValue={this.props.userInfo.username} />
                        <label htmlFor='email'>Email</label>
                        <input type='text' className='form-control' name='email' defaultValue={this.props.userInfo.email} />
                    </fieldset>
                    <div className='my-3'>
                        <input type='submit' className='btn btn-primary w-50' value='Update'></input>
                        <button className='btn btn-danger w-50' onClick={this.props.setEditState}>Cancel</button>
                    </div>
                </div>
            </form>
        )
    }
}
