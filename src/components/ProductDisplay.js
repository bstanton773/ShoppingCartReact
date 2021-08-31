import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ProductDisplay extends Component {
    render() {
        const prod = this.props.product;
        return (
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card my-3">
                        <img
                            src={prod.image_url}
                            className="card-img-top prod-img"
                            alt="..."
                        />
                    <div className="card-body">
                        <h5 className="card-title">{prod.name}</h5>
                        <p className="card-text prod-description">
                        {prod.description}
                        </p>
                        <Link to={`products/${prod.id}`} >
                            <button className="btn btn-secondary w-100">Read More</button>
                        </Link>
                        <button className="btn btn-primary w-100">Add To Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
