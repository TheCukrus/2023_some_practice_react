import { useEffect, useState } from "react";
import axios from "axios";
import Recipe_book_categories from "./Recipe_book_categories.jsx";
import Recipe_book_home from "./Recipe_book_home.jsx";
import Recipe_book_navbar from "./Recipe_book_navbar.jsx";
import Recipe_book_meals from "./Recipe_book_meals.jsx";

const Recipe_book_main = () =>
{
    const [states, set_states] = useState("home");
    const [error, set_error] = useState("");
    const [is_fetching, set_is_fetching] = useState(false);

    const [categories, set_categories] = useState([]);
    const [category_imgs, set_category_imgs] = useState([]);
    const [choosen_category, set_choosen_category] = useState("")


    const fetch_recipes_categories = async () =>
    {
        try
        {
            set_is_fetching(true);
            const recipes_categories = await axios.get(`https://themealdb.com/api/json/v1/1/list.php?c=list`);
            set_categories(recipes_categories.data.meals)
            set_error("");
        }
        catch (err)
        {
            console.log(err);
            set_error("Can't retrive categories. Please try again.");
        }
        finally
        {
            set_is_fetching(false);
        }
    }

    const fetch_img_to_category = async (name) =>
    {
        try
        {
            const img = await axios.get(`https://www.themealdb.com/images/category/${name}.png`);
            set_category_imgs((prev_img) => (
                {
                    ...prev_img,
                    [name]: img.config.url,
                }));
            set_error("");
        }
        catch (err)
        {
            console.log(err);
            set_error("Can't retrieve the images for category. Please try again");
        }
    }


    const fetch_meals_by_category = async (category) =>
    {
        try
        {
            const meals = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            console.log(meals.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }


    //temp
    // useEffect(() => console.log(states), [states])
    // useEffect(() => console.log(choosen_category), [states])
    useEffect(() => { fetch_meals_by_category(choosen_category) }, [choosen_category])



    //fetching category when clicked "Category" in navbar
    useEffect(() =>
    {
        if (states === "categories" && !is_fetching)
        {
            fetch_recipes_categories()
        }
    }, [states])

    //fetching category images when clicked "category" in navbar
    useEffect(() =>
    {
        categories.forEach((category) =>
        {
            fetch_img_to_category(category.strCategory);
        });
    }, [categories])

    return (
        <div>
            <Recipe_book_navbar set_states={set_states} />
            {states === "home" ? <Recipe_book_home /> : null}
            {states === "categories" ? <Recipe_book_categories categories={categories} error={error} set_error={set_error} category_imgs={category_imgs} set_states={set_states} set_choosen_category={set_choosen_category} /> : null}
            {states === "meals" ? <Recipe_book_meals /> : null}
        </div>
    )
};

export default Recipe_book_main;