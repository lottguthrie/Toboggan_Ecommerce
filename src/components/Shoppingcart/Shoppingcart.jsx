import Product from "./Product/Product";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';



console.clear();

let productList = [
  { name: "White Label", price: 20, description: "White Tobaggan", category:"Winter", quantity: 1 },
  { name: "Black Label", price: 20, description: "Black Tobaggan", category:"Winter", quantity: 1  },
  { name: "Red Label", price: 10, description: "Red Toboggan", category:"Summer", quantity: 1  },
];

/* Total */
class Total extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let total = this.props.total.toFixed(2);
    let mystyle = {
      borderTop: "1px solid #ddd",
      marginTop: "10px"
    };
    return (
      <div style={{"marginTop": "30px", "backgroundColor":"#F6F6F6","padding": "10px"}}>
        <h3 className="row" style={{ fontWeight: 400 }}>
          <span className="col-6">total price:</span>
          <span className="col-6 text-right">${total}</span>
        </h3>
      </div>
    );
  }
}

/* ProductForm */
class ProductForm extends React.Component {
  submit(e) {
    e.preventDefault();
    var product = {
      name: this.props.name.value,
      price: Number(this.props.price.value),
      description: this.props.description.value,
      category: this.props.category.value,
      quantity: Number(this.props.quantity.value),

    };
    console.log(this.props.name.value, this.props.price.value, this.props.description.value, this.props.category.value, this.props.quantity.value);
    this.props.handleProduct(product);
    this.props.name.value = "";
    this.props.price.value = 0;
    this.props.description.value = "";
    this.props.category.value = "";
    this.props.quantity.value = 0;
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <h3>add new product</h3>
        <div className="row form-group">
          <label className="col-sm-2  col-sm-form-label">name:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              ref="name"
              placeholder="e.g.)"
              required
            />
          </div>
        </div>

        <div className="row form-group">
          <label className="col-sm-2  col-sm-form-label">price:</label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              ref="price"
              placeholder="e.g.) 100"
              required
            />
          </div>
        </div>

        <div className="row form-group">
          <label className="col-sm-2  col-sm-form-label">description:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              ref="description"
              placeholder="e.g.)"
            />
          </div>
        </div>

        <div className="row form-group">
          <div className="offset-2 col-10">
            <button className="btn btn-outline-primary">create product</button>
          </div>
        </div>
        <hr />
      </form>
    );
  }
}

/* ProductList */
class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      productList: ""
    };

    this.createProduct = this.createProduct.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.showProduct = this.showProduct.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ productList: productList });
    }, 1000);
  }

  createProduct(product) {
    this.setState({
      products: this.state.productList.push(product)
    });
  }

  calculateTotal(price) {
    this.setState({
      total: this.state.total + price
    });
    console.log(this.state.total);
  }

  showProduct(description) {
    console.log(description);
    alert(description);
  }

  render() {
    if (!this.state.productList) return <p>loading...!!!!</p>;

    var component = this;
    var products = this.state.productList.map(function(product) {
      return (
        <Product
          name={product.name}
          price={product.price}
          description={product.description}
          category={product.category}
          handleShow={component.showProduct}
          handleTotal={component.calculateTotal}
        />
      );
    });

    return (
      <div>
        <ProductForm handleProduct={this.createProduct} />
        {products}
        <Total total={this.state.total} />
      </div>
    );
  }
}

ReactDOM.render(<ProductList />, document.getElementById("root"));
export default ShoppingCart;