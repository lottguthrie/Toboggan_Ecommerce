import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";

function NavBar() {

    const logout = () => {
        localStorage.removeItem('token');
        alert("Logging you out")
        window.location.href = "/login";
    }

    return (
        <nav>
            <ul>
                <RouterLink to="/login">
                    <li>Login</li>
                </RouterLink>
                    <li>
                        <a href="/" onClick={logout}>Logout</a>
                    </li>
                <RouterLink to="/register">
                    <li>Register</li>
                </RouterLink>
                <RouterLink to="/shoppingcart">
                    <li>Shopping Cart</li>
                </RouterLink> 
                <RouterLink to="/displayproducts">
                    <li>view products</li>
                </RouterLink> 
                <RouterLink to="/search">
                    <li>search inventory</li>
                </RouterLink> 
            </ul>
        </nav>
    )
}

export default NavBar;

