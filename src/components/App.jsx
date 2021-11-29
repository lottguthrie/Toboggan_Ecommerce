import react, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import Search from './Search/Search';
import NavBar from './Navbar/Navbar';

import RegisterForm from './Register/RegisterForm';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            product: [],
            productId: [],
            productName: [],
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

    // getProduct = async (searchTerm) =>{
    //     let response =await axios.get('')
    //     this.setState({
    //         product: response.data.items,
    //         productId: response.data.items[0].id.productId,
    //         productName: response.data.items[0].snippet.productName


    //     })
    // }

    render(){
        const user = this.state.user;
        return(
            <div>
               <div>
                <Router>
                    <NavBar user={user} />
                    <Routes>
                     <Route path='/register' element={<RegisterForm />} /> */}
                       {/* <Route path='/login' element={<Login/>} />
                        <Route path='/logout' element={<Logout/>} />
                        <Route path='/shoppingcart' element={<ShoppingCart/>} />
                        <Route add='/add' element={<Add/>} /> */} */}
                    </Routes>
                </Router>
                    {/* <Search getProduct={this.getProduct} /> */}
                </div>
            </div>

        )
    }
}

export default App;