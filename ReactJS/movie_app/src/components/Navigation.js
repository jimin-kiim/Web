import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
    return (
        <div>
            {/* <a href="/">Home</a>
            <a href="/about">about</a> */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;
