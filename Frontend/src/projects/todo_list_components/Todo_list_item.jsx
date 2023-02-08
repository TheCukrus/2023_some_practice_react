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

    const update_todo_item = async (id, data) =>
    {
        try
        {
            const result1 = await axios(
                {
                    "method": "patch",
                    "url": `http://127.0.0.1:80/api/v1/todo/${id}`,
                    "data": data
                }
            )
        }
        catch (err)
        {
            console.log(err)
        }
    }

    const checkbox_on_change = async (e) =>
    {
        set_item_data({
            "title": props.data[0].title,
            "description": props.data[0].description,
            "completed": e.target.checked
        });
        await update_todo_item(props.data[0].title, item_data);
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