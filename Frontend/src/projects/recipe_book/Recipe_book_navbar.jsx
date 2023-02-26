import React from "react";
import s from "./Recipe_book.module.css";

const Recipe_book_navbar = (props) =>
{

    const handle_button_home = () => props.set_states("home");
    const hangle_button_categories = () => props.set_states("categories");


    return (
        <div>
            <div className={s.navbar_links}>
                <input type="button" value="Home" onClick={handle_button_home} />
                <input type="button" value="Categories" onClick={hangle_button_categories} />

                <form>
                    <input type="search" placeholder="Search your recipes" />
                </form>
            </div>
            <hr />
        </div>
    )
}

export default Recipe_book_navbar;