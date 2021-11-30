import react, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import Search from './Search/Search';
import NavBar from './Navbar/Navbar';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import ProductReview from './Reviews/Reviews';
import RegisterForm from './Register/RegisterForm';
import Shoppingcart from './Shoppingcart/Shoppingcart';
import DisplayProducts from './DisplayProducts/DisplayProducts';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loggedInUser: null,
            products: [],
            shoppingCart: [],
            displayProducts: []
        };
    }

    registerNewUser = async (user) => {
        console.log("User object from Register: ", user)
        try{
            const response = await axios.post('https://localhost:44394/api/authentication', user);
            console.log(response)
            this.loggedInUser = ({'userName': user.userName, 'password': user.password})

        }
        catch(error) {
            console.log(error, 'Invalid input');
        }
    }

    componentDidMount() {
        const jwt = localStorage.getItem('token');
        try{
            const user = jwt_decode(jwt);
            this.setState({
                user
            });
        } catch (err) {
           console.log(err) 
        }
        this.getProduct()
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

     getProduct = async () =>{
         console.log("Inside getProduct function")
         try {
             let response =await axios.get('https://localhost:44394/api/Product/')
             this.setState({
                 products: response.data
            });
         } catch (err) {
             console.log("Get Products API error: ", err)
         }
     }

    render(){
        const user = this.state.user;
        return(
            <div>
               <div>
                    <NavBar user={user} />
                    <Routes>
                        <Route path='/register' element={<RegisterForm />} /> 
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/shoppingcart' element={<Shoppingcart/>} />
                        <Route path='/displayproducts' element={<DisplayProducts products={this.state.products}/>} />  
                        <Route getProduct= '/search' element={<Search product={this.getProduct} />} />
                    </Routes>
                      
                </div>
            </div>

        )
    }
}

export default App;