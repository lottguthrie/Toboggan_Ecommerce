import react, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

import RegisterForm from './Register/RegisterForm';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
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
                <Route path='/register' component={RegisterForm} />
            </div>

        )
    }
}

export default App;