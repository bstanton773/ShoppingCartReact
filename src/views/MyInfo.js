import React, { Component } from 'react'
import DisplayAccountInfo from '../components/DisplayAccountInfo';
import EditAccountInfo from '../components/EditAccountInfo';

export default class MyInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {},
            edit: false
        }
    }

    fetchData(){
        const userId = localStorage.getItem('user_id')
        fetch(`http://cart-api-66.herokuapp.com/users/${userId}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                userInfo: data
            })
        })
    }

    componentDidMount(){
        this.fetchData()
    }

    setEditState = () => {
        const newState = !this.state.edit
        this.setState({
            edit: newState
        })
        this.fetchData()
    }

    render() {
        return (
            <div className="card mx-5">

                {this.state.edit ? <EditAccountInfo userInfo={this.state.userInfo} setEditState={this.setEditState} flashMessage={this.props.flashMessage}/> :
                <DisplayAccountInfo userInfo={this.state.userInfo} setEditState={this.setEditState}/>}
            </div>
        )
    }
}
