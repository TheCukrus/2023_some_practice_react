import { useEffect } from "react";
import { useState } from "react";
import s from "./Recipe_book.module.css";

const Recipe_book_meal_by_id = (props) =>
{
    const [instructions, set_instructions] = useState([])

    console.log(props.meal)

    //making array to push the ingredients and it measures
    let meal_ingredients = [];
    for (let i = 1; i <= 20; i++)
    {
        const measure = props.meal[`strMeasure${i}`];
        const ingredient = props.meal[`strIngredient${i}`];
        if (!measure && !ingredient) break;
        meal_ingredients.push({ measure, ingredient });
    }

    //function that spliting the meal making instructions into array.
    const get_instructions = async () =>
    {
        try
        {
            if (!props.meal.strInstructions) return [];
            const instructions_array = await props.meal.strInstructions.split(/\r\n/g);
            const filtered_instructions_array = instructions_array.filter((instruction) => instruction !== "");
            props.set_error("");
            return filtered_instructions_array;
        }
        catch (err)
        {
            console.log(err);
            props.set_error("Can't get instructions. Please try again.");
        }
    }


    const fetch_instructions = async () =>
    {
        try
        {
            const instruction_array = await get_instructions();
            set_instructions(instruction_array);
            props.set_error("");
        }
        catch (err)
        {
            console.log(err);
            props.set_error("Can't retrive instructions. Please try again.")
        }
    }

    useEffect(() => { fetch_instructions(); }, [props.meal.strInstructions])

    return (
        <div className={s.main_view}>
            {props.error && <p>{props.error}</p>}

            {props.meal ? (
                <div className={s.meal_container}>
                    {/*renders img */}
                    <img src={props.meal.strMealThumb} alt={props.meal.strMeal} className={s.meal_image} />

                    <div>
                        {/*renders name */}
                        <h1>{props.meal.strMeal}</h1>

                        {/*renders ingredient's */}
                        <h3>Ingredients</h3>
                        <hr />
                        <div className={s.meal_ingredients}>
                            {meal_ingredients.map(({ measure, ingredient }, i) => (
                                <p key={i}>
                                    {measure && `${measure} `}
                                    {ingredient}
                                </p>
                            ))}
                        </div>

                        <div>
                            {/*renders instructions */}
                            <h3>Instructions</h3>
                            <hr />
                            <ul>
                                {instructions.map((ele, i) => (
                                    <li key={i}>{ele}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}

        </div>
    )
}

export default Recipe_book_meal_by_id;