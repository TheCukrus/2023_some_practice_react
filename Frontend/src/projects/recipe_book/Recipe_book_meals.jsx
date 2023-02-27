import React from "react";
import s from "./Recipe_book.module.css";

const Recipe_book_meals = (props) =>
{
    return (
        <div>
            {props.error && <p>{props.error}</p>}

            <div className={s.meal_container}>
                {props.meals !== null ? (
                    props.meals.map((meals, i) =>
                    (
                        <div
                            className={s.meals}
                            key={i}
                            onClick={() =>
                            {
                                props.set_states("meal");
                                props.set_meal_id(meals.idMeal)
                            }}
                        >
                            <img src={meals.strMealThumb} alt={meals.strMeal} />
                            <p className={s.meal_title}>{meals.strMeal}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading meals...</p>
                )}
            </div>
        </div>
    )
}

export default Recipe_book_meals;