import axios from "axios";
import s from "./Todo_list.module.css";
import { useState } from "react";
import trash from "../../icons/trash.png";

const Todo_list_item = (props) =>
{


    const [item_data, set_item_data] = useState({
        "title": props.data.title,
        "description": props.data.description,
        "completed": props.data.completed
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
                })
        }
        catch (err)
        {
            console.log(err)
        }
    }

    const checkbox_on_change = (e) =>
    {
        set_item_data({
            "title": props.data.title,
            "description": props.data.description,
            "completed": e.target.checked
        });
        update_todo_item(props.data.title, item_data)
    }

    const handle_remove_todo = async () =>
    {
        try
        {
            const result1 = await axios(
                {
                    "method": "Delete",
                    "url": `http://127.0.0.1:80/api/v1/todo/${item_data.title}`
                }
            )
            props.fetch_data();
        }
        catch (err)
        {
            console.log(err)
        }
    }

    return (
        <div className={s.Todo_list_item}>
            <input type="checkbox" checked={item_data.completed} onChange={checkbox_on_change} className={s.Todo_list_item_checkbox}/>
            <h3>{item_data.title}</h3>
            <p>{item_data.description}</p>
            {/* <input type="button" value="remove Todo"  /> */}
            <img src={trash} alt="remove btn" className={s.Todo_list_item_remove_button} onClick={handle_remove_todo} />
            <p></p>
        </div>
    )
}

export default Todo_list_item;