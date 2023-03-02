import React from "react";
import s from "./Recipe_book.module.css";

const Recipe_book_home = () =>
{
    return (
        <div className={s.home_container}>
            <h1 className={s.home_header}>Welcome to Recipe Book!</h1>
            <p className={s.text}>With our app,
                you can browse a huge collection of recipes from all around the world,
                create your own recipe collection,
                and even search for recipes based on specific ingredients or dietary restrictions.
            </p>
            <p className={s.text}>
                To get started,
                simply use the navigation bar at the top of the page to browse through different categories of recipes,
                or use the search bar to look up recipes by name.
                Once you find a recipe you like,
                click on it to view a detailed list of ingredients and step-by-step instructions.
            </p>
        </div>
    )
}

export default Recipe_book_home;