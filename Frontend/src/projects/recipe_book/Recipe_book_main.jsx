import { useState, useEffect } from "react";
import Recipe_book_navbar from "./Recipe_book_navbar.jsx";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

const Recipe_book_main = () =>
{
    const [error, set_error] = useState("");
    const [categories, set_categories] = useState({})

    const fetch_recipes_categories = async () =>
    {
        try
        {
            const recipes_categories = await axios.get(`https://themealdb.com/api/json/v1/1/list.php?c=list`);
            set_categories(recipes_categories.data)
            set_error("");
        }
        catch (err)
        {
            console.log(err);
            set_error("Can't retrive categories. Please try again.");
        }
    }

    useEffect(() => { fetch_recipes_categories() }, [])

    //temp
    useEffect(() => { console.log(categories) }, [categories])

    return (
        <div>
            Recipe_book
            <Recipe_book_navbar categories={categories} />
            {error && <p>{error}</p>}
        </div>
    )
}

export default Recipe_book_main;


/*

  <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/todo" element={<Todo_list_main />} />
        <Route path="/weather_app" element={<Weather_app_main />} />
        <Route path="/recipe_book" element={<Recipe_book_main />} />
      </Routes>

      */