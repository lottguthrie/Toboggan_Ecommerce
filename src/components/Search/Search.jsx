import React, {Component} from "react";


class Search extends Component {
    state = {
        searchTerm: ''
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        //this.props.getProduct(this.state.searchTerm);
    }

render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="searchTerm">
                <span className ="visually-hidden">Search Toboggans</span>
            </label>
            <input action='Search' onChange={this.handleChange} name='searchTerm' type="text" placeholder="Search Toboggans" value={this.state.searchTerm}/>
            <button type='submit'>Search</button>
        </form>
        )
    }
}
 export default Search;