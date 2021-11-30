import React, { Component } from 'react';
import App from '../App';
import '../RatingsList/RatingsList.css';

class RatingsList extends Component {

  constructor(props){
    super(props);
    this.state = {
      ratings: [],
      user:''
    };
  }

  async componentDidMount(){
    const user = await this.props.auth.getUser();
    App.orderByChild('user').equalTo(user.email).on('value', snap => {
      const response = snap.val();
      const ratings = [];
      for(let rating in response){
        ratings.push({id: rating, ...response[rating]});
      }
      this.setState({
        ratings: ratings
      });
    });
  }

  render(){
    return (
      <table className="ratingslist">
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
        {this.state.ratings.map((rating) => {
          return (
            <tr className="rating" key={rating.id}>
              <td>{rating.name}</td>
              <td>{rating.description}</td>
              <td className="rating-value">{rating.rating}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}

export default RatingsList;