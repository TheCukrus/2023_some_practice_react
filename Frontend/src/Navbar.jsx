import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>
{
    return (
        <div>
            <h1>This is Navbar</h1>
            <Link to="todo">Click to view Todo app</Link>
            <br />
            <Link to="weather_app">Click to view a weather app</Link>
        </div>
    )
}

export default Navbar;