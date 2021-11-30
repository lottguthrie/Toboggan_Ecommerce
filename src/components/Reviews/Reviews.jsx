import axios from 'axios';
import React, {Component } from 'react';




class ProductReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            review: '',

        }
    }

    async reviewRequest(productReview) {
        productReview = {
            review: productReview.review,

        }
        console.log(productReview)
        try{
            let response = await axios.post('https://localhost:44394/api/reviews', productReview)
            console.log(response.data);
            window.location = '/product';
        }
        catch(ex){
            console.log("Invalid")
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.productReview]: event.target.type === "productReview"? event.target.valueAsNumber : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.productReviewRequest(this.state);
    };


    render() {
        const Review = this.state.review;
;
        return (
            <div class="ReviewForm">
                <h3>Please leave a product review</h3>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input class="m-2" name="review" type="text" placeholder="Product Review" value={ProductReview} onChange={this.handleChange} />
                    <br />
                    <input id="productReviewButton" name="submit" type="Submit" value="Submit Review" className="btn btn-secondary m-2" />
                </form> 
            </div>
        );
    }
}

export default ProductReview;