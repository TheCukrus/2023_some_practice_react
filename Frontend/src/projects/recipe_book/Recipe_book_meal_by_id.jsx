import React from "react";
import s from "./Recipe_book.module.css";

const Recipe_book_meal_by_id = (props) =>
{
    console.log(props.meal)
    return (
        <div>
            <h1>there would be rendered meal by id</h1>
            {props.error && <p>{props.error}</p>}

            <div className={s.meal_container}>

                {props.meal ? (
                    <div>
                        <img src={props.meal.strMealThumb} />
                        <h1>{props.meal.strMeal}</h1>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default Recipe_book_meal_by_id;