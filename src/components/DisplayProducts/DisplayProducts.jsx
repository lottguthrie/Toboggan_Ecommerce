import React from 'react';
import './DisplayProducts.css';

const DisplayProducts = (props) => {

        return (
            <div>
            <Table className="Product Display">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Price </th>
                        <th> Category </th>
                        <th> Description </th>
                        <th> Review </th>
                    </tr>
                </thead>
            
                {props.products.map((product) => {   
                    return (
                        <tbody>
                            <tr>                        
                                <td>{product.productName}</td>
                                <td>{product.productPrice}.00</td>
                                <td>{product.category}</td>
                                <td>$ {product.productDescription}</td>
                                <td>{product.category}</td>
                                <td><button class="btn btn-outline-light btn-lg" type="submit">Add to Cart</button></td>
                            </tr>              
                        </tbody>
                    )
                })}
            </Table>
        </div>
    );
};

export default DisplayProducts;