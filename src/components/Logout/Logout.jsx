import react, { Component } from 'react';
import { Link as RouterLink } from "react-router-dom";


function Logout() {
    
   const logout = () => {
            localStorage.removeItem('token');
            window.location.href = "/Navbar/Navbar";
}
    return(
    
            <button onClick={this.logout}>Logout</button>
    )
};

export default Logout;