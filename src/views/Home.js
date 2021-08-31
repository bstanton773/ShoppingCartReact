import React, { Component } from 'react'
import ProductDisplay from '../components/ProductDisplay'

export default class Home extends Component {
    render() {
        console.log(this.props.products)
        return (
            <div className='pt-3'>
                <div className='banner'>
                    <h1 className='header-text'>Welcome to the Kekambas Shopping Cart</h1>
                </div>
                <div className='row mt-3'>
                    {this.props.products.map((p, idx) => <ProductDisplay product={p} key={idx}/>)}
                </div>
            </div>
        )
    }
}
