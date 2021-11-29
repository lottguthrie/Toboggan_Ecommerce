import React, { Component } from 'react';

import './DisplayProducts.css';

const DisplayProducts = (props) => {
    const productsInCart = props.productsInCart;

    const cartDetails = productsInCart.map((item) => {
        const details = {
            productId: item.productId,
            productName: item.product.productName,
            productPrice: item.product.productPrice,
            productQuantity: item.quantity,
            userId: item.id
        };

        return (
            <div>
                <dl class="border">
                    <dt>Product Name: {details.productName}</dt>
                        <dd>Price: ${details.productPrice}</dd>
                        <dd>Quantity: {details.productQuantity}</dd>
                        <button className="btn btn-primary text-yellow" onClick={() => props.deleteProduct(details)}>DELETE</button>
                </dl>
            </div>
        )
    });
    return(
        <div>
            {cartDetails}
        </div>
    )
}
export default DisplayProducts;