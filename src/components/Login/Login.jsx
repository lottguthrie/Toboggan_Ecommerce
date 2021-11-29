import react, { Component } from 'react';
import { Link as RouterLink } from "react-router-dom";


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
        // const login = {
        //     username: this.state.username,
        //     password: this.state.password,
        // }
        // this.props.login(login);
        // this.setState({})
    }
    

    render(){
        return(
            <div className="form">
             <form onSubmit={this.handleSubmit}>
                <div className="input-field">
                    <label>Username</label>
                    <input type="text" name='username' required />
                </div>
                <div className="input-field">
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