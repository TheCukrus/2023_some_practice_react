import s from "./Recipe_book.module.css";
import axios from "axios";

const Recipe_book_navbar = (props) =>
{

    const handle_button_home = () => props.set_states("home");
    const hangle_button_categories = () => props.set_states("categories");


    const handle_search = async (e) =>
    {
        e.preventDefault();
        try
        {
            const search_meal = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.search_term}`);
            props.set_search_result(search_meal.data.meals);
            props.set_states("search");
            props.set_error("")
        }
        catch (err)
        {
            console.log(err);
            props.set_error("Can't receive search result. Please try again.")
        }
    }

    const handle_input_change = (e) =>
    {
        props.set_search_term(e.target.value);
    }

    return (
        <div className={s.navbar}>
            <div className={s.navbar_links}>
                <input
                    type="button"
                    value="Home"
                    onClick={handle_button_home}
                />
                <input
                    type="button"
                    value="Categories"
                    onClick={hangle_button_categories}
                />

                <form onSubmit={handle_search}>
                    <input
                        type="search"
                        placeholder="Search your recipes"
                        onChange={handle_input_change}
                        value={props.search_term}
                    />
                </form>
            </div>
        </div>
    )
}

export default Recipe_book_navbar;