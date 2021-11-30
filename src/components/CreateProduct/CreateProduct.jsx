import React, { Component } from 'react';
import './CreateProduct.css';

class CreateProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            price: null,
            category: "",
            description: "",
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const product = {
            name: this.state.productName,
            price: parseFloat(this.state.productPrice),
            category: this.state.category,
            description: this.state.productDescription,
        };
        this.props.addNewProduct(product);
        this.setState({
            category: "",
            description: "",
            name: "",  
            price:  null,  
        });
    }

render() {
    return (
<div className="container">
    <form onSubmit={this.handleSubmit} className="form-addProduct">
        <div className="row">
                <div className="col">
                <div className="title">
                <h1> Add New Product </h1>
                </div>
                    <input type="text" name = "name" id="typeNameX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.productName} />
                    <label class="form-label fs-6 fw-bold" for="typeNameX">Product Name</label>
                    <input type="text" name = "description" id="typeDescriptionX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.productDescription} />
                    <label class="form-label fs-6 fw-bold" for="typeDescriptionX">Product Description</label>
                    <input type="number" name = "price" id="typePriceX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.productPrice} />
                    <label class="form-label fs-6 fw-bold" for="typePriceX">Product Price</label>
                    <input type="text" name = "category" id="typeCategoryX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.category} />
                    <label class="form-label fs-6 fw-bold" for="typeCategoryX">Category</label>
                
                <div class="card-footer">
                    <button class="btn btn-outline-light btn-lg" type="submit">Add Product</button>
                </div>
            </div>
        </div>
    </form>
</div>

    )
}
}

export default CreateProduct;