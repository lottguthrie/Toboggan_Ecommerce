import react, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

import RegisterForm from './Register/RegisterForm';
import Product from './Product/Product';
import ShoppingCart from './Shoppingcart/Shoppingcart';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            product: [],
            productId: [],
            productName: [],
            productPrice:[],
            productCategory: [],
            productQuantity: [], 
        }
    }

    componentDidMount() {
        const jwt = localStorage.getItem('token');
        try{
            const user = jwt_decode(jwt);
            this.setState({
                user
            });
        } catch {

        }
    }
    
    async makeLoginRequest(logInfo){
        try{

            let userInfo = logInfo;
            let response = await axios.post('https://localhost:44394/api/authentication/login', userInfo);

            localStorage.setItem('token', response.data.token);
            window.location = '/';
            return localStorage;
        }
        catch(ex){
            console.log("bad call")
        }
    } 

    render(){
        const user = this.state.user;
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path='/register' component={RegisterForm} />
                        <Route path='/product' component={Product} />
                        <Route path= '/shoppingcart' component={ShoppingCart} />
                    </Switch>
                </Router>
            </div>

        )
    }
}

export default App;