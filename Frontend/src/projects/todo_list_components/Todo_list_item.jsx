import axios from "axios";
import s from "./Todo_list.module.css";
import { useState } from "react";

const Todo_list_item = (props) =>
{

    const [item_data, set_item_data] = useState({
        "title": props.data[0].title,
        "description": props.data[0].description,
        "completed": props.data[0].completed
    })

    const checkbox_on_change = async (e) =>
    {
        set_item_data({
            "title": props.data[0].title,
            "description": props.data[0].description,
            "completed": e.target.checked
        })
    }

    return (
        <div className={s.Todo_list_item}>
            <input type="checkbox" checked={item_data.completed} onChange={checkbox_on_change} />
            <h3>{item_data.title}</h3>
            <p>{item_data.description}</p>
        </div>
    )
}

export default Todo_list_item;