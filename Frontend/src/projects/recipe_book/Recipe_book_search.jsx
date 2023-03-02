import React from "react";
import s from "./Recipe_book.module.css";

const Recipe_book_search = (props) =>
{
    console.log(props.search_result)
    return (
        <div className={s.main_view}>

            <div className={s.meals_container}>
                {props.search_result !== null ?
                    props.search_result.map((ele, i) =>
                    (
                        <div
                            className={s.meals}
                            key={i}
                            onClick={() =>
                            {
                                props.set_states("meal");
                                props.set_meal_id(ele.idMeal)
                            }}
                        >
                            <img src={ele.strMealThumb} alt={ele.strMeal} />
                            <p className={s.meal_title}>{ele.strMeal}</p>

                        </div>
                    )) : <p>Doesn't find any recipes</p>} 
            </div>
        </div>
    )
}

export default Recipe_book_search;