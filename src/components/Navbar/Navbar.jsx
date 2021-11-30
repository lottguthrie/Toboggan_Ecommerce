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
                    <li>view products</li>
                </RouterLink>
                <RouterLink to="/rating">
                    <li>Rate</li>
                </RouterLink>
                <RouterLink to="/ratingslist">
                    <li>My Ratings</li>
                </RouterLink>
                <RouterLink to="/search">
                    <li>search inventory</li>
                </RouterLink> 
            </ul>
        </nav>
    )
}

export default NavBar;

