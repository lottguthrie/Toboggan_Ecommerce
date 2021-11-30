import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";

function NavBar() {

    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = "/login";
    }

    return (
        <nav>
            <ul>
                {/* <RouterLink>
                    <hi>Home</hi> }
                {</RouterLink> */}
                <RouterLink to="/login">
                    <li>Login</li>
                </RouterLink>
                <RouterLink to="/logout">
                    <li>Logout</li>
                </RouterLink>
                <RouterLink to="/register">
                    <li>Register</li>
                </RouterLink>
                <RouterLink to="/shoppingcart">
                    <li>Shopping Cart</li>
                </RouterLink> 
                <RouterLink to="/displayproducts">
                    <li>Display Products</li>
                </RouterLink> 
            </ul>
        </nav>
    )
}

export default NavBar;

