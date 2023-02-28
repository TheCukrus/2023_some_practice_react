import React from "react";
import s from "./Recipe_book.module.css";

const Recipe_book_meal_by_id = (props) =>
{
    console.log(props.meal)

    let temp = new Array(20).fill({ measure: "", ingredient: "" });

    for (let i = 1; i <= 20; i++)
    {
        const measure = props.meal[`strMeasure${i}`];
        const ingredient = props.meal[`strIngredient${i}`];
        if (!measure && !ingredient) break;
        temp[i - 1] = { measure, ingredient };
    }

    return (
        <div>
            <h1>there would be rendered meal by id</h1>
            {props.error && <p>{props.error}</p>}

            <div className={s.meal_container}>

                {props.meal ? (
                    <div>
                        {/*renders img */}
                        <img src={props.meal.strMealThumb} alt={props.meal.strMeal} />
                        {/*renders name */}
                        <h1>{props.meal.strMeal}</h1>

                        {/*renders ingredient's */}
                        <h3>Ingredients</h3>
                        <hr />

                        {temp.map(({ measure, ingredient }, i) => (
                            <p key={i}>
                                {measure && `${measure} `}
                                {ingredient}
                            </p>
                        ))}

                        {/*renders instructions */}
                        <h3>Instructions</h3>
                        <hr />
                        {props.meal.strInstructions}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default Recipe_book_meal_by_id;