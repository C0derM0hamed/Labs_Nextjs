import Image from 'next/image';
import React from 'react';

const ProductDetails = (props) => {

    return (
        <div class="container mt-4">
            <div class="row">
                <div class="col-md-4">
                    <Image src={props.thumbnail} width={300} height={300} alt={props.title}/>
                </div>
                <div class="col-md-8">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Brand:</strong> {props.brand || "N/A"}</li>
                        <li class="list-group-item"><strong>Category:</strong> {props.category}</li>
                        <li class="list-group-item"><strong>Price:</strong> ${props.price}</li>
                        <li class="list-group-item"><strong>Rating:</strong> ⭐ {props.rating}</li>
                        <li class="list-group-item"><strong>Stock:</strong> {props.stock}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
