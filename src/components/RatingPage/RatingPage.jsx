import React, { Component } from 'react';
import Rating from '../../components/Rating/Rating';
import './ratingpage.css';
import axios from 'axios';

class RatingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      rating: 0,
      user: ''
    };
  }

  async componentDidMount(){
    const user = await this.props.getUser();
    this.setState({user:user.email});
  }


  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  setRating = rating => {
    this.setState({ rating: rating });
  };

  saveRating = () => {
    E-CommerceRef.push()
      .set(this.state)
      .then(() => {
        this.props.history.push('/rating');
      });
  };

  render() {
    return (
      <div className="rating-form">
        <div className="heading">Rate A Product</div>
        <div className="form-input">
          <label htmlFor="name">Product:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-input rating">
          <label htmlFor="rating">Rating:</label>
          <Rating
            numberOfStars="5"
            currentRating="0"
            onClick={this.setRating}
          />
        </div>
        <div className="actions">
          <button type="submit" onClick={this.saveRating}>
            Submit Rating
          </button>
        </div>
      </div>
    );
  }
}


export default RatingPage;