import { useEffect, useState } from "react";
import Recipe_book_navbar from "./Recipe_book_navbar.jsx";

const Recipe_book_main = () =>
{
    const [states, set_states] = useState("main");
    const [error, set_error] = useState("");

    useEffect(() => console.log(states), [states])
    return (
        <div>
            <Recipe_book_navbar set_states={set_states} />
        </div>
    )
};

export default Recipe_book_main;