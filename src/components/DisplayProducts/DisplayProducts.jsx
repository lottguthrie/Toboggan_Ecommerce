import React from 'react';
import './DisplayProducts.css';


<<<<<<< HEAD
=======

>>>>>>> 23a5d67034228311612f77128aa0d1ea9c50757e
const DisplayProducts = (props) => {

    const { products } = props;

        return (
            <div>
<<<<<<< HEAD
            <table className="Product Display">
=======
            <table className="table-container">
>>>>>>> 08d66badc14d2c79627f0e50d465c3be48b1a626
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Price </th>
                        <th> Category </th>
                        <th> Description </th>
                        <th> Review </th>
                    </tr>
                </thead>
<<<<<<< HEAD
            
=======
                {console.log("Display produtcst props: ", products)}
>>>>>>> 08d66badc14d2c79627f0e50d465c3be48b1a626
                {products.map((product, index) => {   
                    return (
                        <tbody>
                            <tr key={index}>                        
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
            </table>
        </div>
    );
};

export default DisplayProducts;