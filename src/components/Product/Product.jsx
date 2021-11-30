import React, { Component } from 'react';
import ProductReview from '../Reviews/Reviews';




/* Product */
class Product extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        qty: 0
      };
      this.add = this.add.bind(this);
      this.subtract = this.subtract.bind(this);
      this.showDescription = this.showDescription.bind(this);
      this.showReview = this.showProductReview.bind(this)
      this.showRating = this.showProductRating.bind(this)
    }
  
    add() {
      this.setState({
        qty: this.state.qty + 1
      });
      this.props.handleTotal(this.props.price);
    }
  
    subtract() {
      this.setState({
        qty: this.state.qty - 1
      });
      this.props.handleTotal(-this.props.price);
    }
  
    showDescription() {
      this.props.handleShow(this.props.description);
    }

    showProductReview() {
      this.props.handleReview(this.props.ProductReview);
    }

    showProductRating() {
      this.props.handleRating(this.props.ProductRating);
    }
  
    render() {
      return (
        <div>
          <div className="row form-group">
            <div className="col-sm-10">
              <h4>{this.props.name}: ${this.props.price}</h4>
            </div>
            <div className="col-sm-2 text-right">qty: {this.state.qty}</div>
          </div>
          <div className="row btn-toolbar">
            <div className="col-6">
              <button className="btn btn-outline-primary" onClick={this.showDescription}>
                show description
              </button>
              <div>
              <button className="btn btn-outline-primary" onClick={this.showProductReview}>
                show product review
              </button>
              </div>
              <div>
              <button className="btn btn-outline-primary" onClick={this.showProductRating}>
                show product rating
              </button>
              </div>
            </div>
            <div className="col-6 text-right">
              <button className="btn btn-outline-primary" onClick={this.add}>
                +1
              </button>
              <button className="btn btn-outline-primary" onClick={this.subtract} disabled={this.state.qty < 1}>
                -1
              </button>
            </div>
          </div>
          <hr />
        </div>
      );
    }
  }
  

  ReactDOM.render(<Product />, document.getElementById("root"));
  export default Product