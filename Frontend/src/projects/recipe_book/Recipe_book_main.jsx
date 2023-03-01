import { useEffect, useState } from "react";
import axios from "axios";
import s from "./Recipe_book.module.css";
import Recipe_book_categories from "./Recipe_book_categories.jsx";
import Recipe_book_home from "./Recipe_book_home.jsx";
import Recipe_book_navbar from "./Recipe_book_navbar.jsx";
import Recipe_book_meals from "./Recipe_book_meals.jsx";
import Recipe_book_meal_by_id from "./Recipe_book_meal_by_id.jsx";


const Recipe_book_main = () =>
{
    const [states, set_states] = useState("home");
    const [error, set_error] = useState("");
    const [is_fetching, set_is_fetching] = useState(false);

    const [categories, set_categories] = useState([]);
    const [category_imgs, set_category_imgs] = useState([]);

    const [choosen_category, set_choosen_category] = useState("");
    const [meals, set_meals] = useState([]);

    const [meal_id, set_meal_id] = useState("")
    const [meal, set_meal] = useState([])


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
            set_error("Can't retrieve the images for category. Please try again.");
        }
    }


    const fetch_meals_by_category = async (category) =>
    {
        try
        {
            set_is_fetching(true);
            const meals = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            set_meals(meals.data.meals);
            set_error("");
        }
        catch (err)
        {
            console.log(err);
            set_error("Can't retrieve the meals by category. Please try again.")
        }
        finally
        {
            set_is_fetching(false);
        }
    }

    const fetch_meal_by_id = async (id) =>
    {
        try
        {
            set_is_fetching(true);
            const meal = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            set_meal(meal.data.meals[0]);
            set_error("");
        }
        catch (err)
        {
            console.log(err);
            set_error("Can't retrieve meal by id. Please try again");
        }
        finally
        {
            set_is_fetching(false);
        }
    }

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

    //fetching meals every time when clicking on the category meal
    useEffect(() =>
    {
        if (states === "meals" && !is_fetching)
        {
            fetch_meals_by_category(choosen_category)
        }
    }, [states])

    //fetching meal by given id
    useEffect(() =>
    {
        if (states === "meal" && !is_fetching)
        {
            fetch_meal_by_id(meal_id);
        }
    }, [states])

    return (
        <div>
            <Recipe_book_navbar set_states={set_states} />
            <div>
                {states === "home" ? <Recipe_book_home /> : null}
                {states === "categories" ? <Recipe_book_categories categories={categories} error={error} set_error={set_error} category_imgs={category_imgs} set_states={set_states} set_choosen_category={set_choosen_category} /> : null}
                {states === "meals" ? <Recipe_book_meals meals={meals} error={error} set_error={set_error} set_states={set_states} set_meal_id={set_meal_id} /> : null}
                {states === "meal" ? <Recipe_book_meal_by_id meal={meal} error={error} set_error={set_error} /> : null}
            </div>
        </div>
    )
};

export default Recipe_book_main;