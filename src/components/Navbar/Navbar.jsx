import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";

function NavBar() {

    return (
        <nav>
            <ul>
                {/* <RouterLink>
                    <hi>Home</hi> */}
                {/* </RouterLink>
                <RouterLink >
                    <li>Login</li>
                </RouterLink>
                <RouterLink >
                    <li>Logout</li> */}
                {/* </RouterLink>  */}
                <RouterLink to="/register">
                    <li>Register</li>
                </RouterLink>
                {/* <RouterLink >
                    <li>Shopping Cart</li>
                </RouterLink>  */}
            </ul>
        </nav>
    )
}

export default NavBar;

