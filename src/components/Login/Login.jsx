import react, { Component } from 'react';
import { Link as RouterLink } from "react-router-dom";
import './Login.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: ' ',
            password: ' ',
        }
    }
    

    handleSubmit = (event) => {
        event.preventDefault();
        const login = {
            username: this.state.username,
            password: this.state.password,
        }
        //this.props.login(login);
        this.setState({
            username: '',
            password: '',

        });
    }
    

    render(){
        return(
            <div className="form">
            <form onSubmit={this.handleSubmit}>
            <div className="login-form">
            <div className="title">Welcome Please Sign In</div>
            </div>
                <div className="input-field">
                    <label>Username</label>
                    <input type="text" name='username' required />
                </div>
                <div className="input-field">
                    <label>Password</label>
                    <input type="password" name='password' required />
                </div>
                <div className="button">
                    <input type="submit" />
                </div>
                </form>
            </div>

        )
    }
}

export default Login;