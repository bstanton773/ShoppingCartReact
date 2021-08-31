import React, { Component } from 'react'

export default class EditAccountInfo extends Component {
    render() {
        return (
            <form>
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
                    <input type='submit' className='btn btn-primary w-50' value='Update'></input>
                    <button className='btn btn-danger w-50' onClick={this.props.setEditState}>Cancel</button>
                </div>
            </form>
        )
    }
}
