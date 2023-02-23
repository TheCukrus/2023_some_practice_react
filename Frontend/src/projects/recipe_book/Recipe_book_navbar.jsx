import React from "react";
import { Link } from "react-router-dom";
import s from "./Recipe_book.module.css";

const Recipe_book_navbar = (props) =>
{
    return (
        <div>
            <div className={s.navbar_links}>
                <Link to="/recipe_book">Home</Link><br />
                <Link to="/recipe_book/categories">Categories</Link>
            </div>
            <form className={s.search_bar}>
                <input type="search"></input>
            </form>
            <hr />
        </div>
    )
}

export default Recipe_book_navbar;