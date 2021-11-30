import React from 'react';
import './DisplayProducts.css';
import { Link as RouterLink } from "react-router-dom";
import Table from 'react-bootstrap/Table';

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
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.review}</td>
                                <td>$ {product.price}.00</td>
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