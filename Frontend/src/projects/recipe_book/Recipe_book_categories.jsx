import { useState, useEffect } from "react";
import Recipe_book_navbar from "./Recipe_book_navbar";
import axios from "axios";
import s from "./Recipe_book.module.css";

const Recipe_book_categories = () =>
{
    const [error, set_error] = useState("");
    const [categories, set_categories] = useState([])
    const [category_img, set_category_img] = useState([])


    const fetch_recipes_categories = async () =>
    {
        try
        {
            const recipes_categories = await axios.get(`https://themealdb.com/api/json/v1/1/list.php?c=list`);
            set_categories(recipes_categories.data.meals)
            set_error("");
        }
        catch (err)
        {
            console.log(err);
            set_error("Can't retrive categories. Please try again.");
        }
    }

    const fetch_img_to_category = async (name) =>
    {
        try
        {
            const img = await axios.get(`https://www.themealdb.com/images/category/${name}.png`);
            set_category_img(img.config.url);
            set_error("");
        }
        catch (err)
        {
            console.log(err);
            set_error("Can't retrieve the images for category. Please try again");
        }
    }


    useEffect(() => { fetch_recipes_categories() }, []);
    // useEffect(() =>
    // {
    //     categories.forEach((category) =>
    //     {
    //         fetch_img_to_category(category.strCategory);
    //     });
    // }, [categories])

    return (
        <div>
            <Recipe_book_navbar />
            {error && <p>{error}</p>}

            <div className={s.container}>
                {categories.length > 0 ? (
                    categories.map((category) =>
                    (
                        <div className={s.category} key={category.strCategory}>
                            <img src={category_img} alt={category.strCategory} />
                            <p className={s.category_title}>{category.strCategory}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading categories...</p>
                )}
            </div>
        </div>
    )
}

export default Recipe_book_categories;


// const fetch_img_to_category = async (name) =>
// {
//     try
//     {
//         const img = await axios.get(`www.themealdb.com/images/ingredients/${name}.png`)
//         set_category_img(img)
//         console.log(img)
//         set_error("");
//     }
//     catch (err)
//     {
//         console.log(err);
//         set_error("Can't retrive the images for category. Please try again");
//     }
// }