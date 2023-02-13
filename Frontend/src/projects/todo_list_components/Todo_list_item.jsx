import axios from "axios";
import s from "./Todo_list.module.css";
import { useState } from "react";
import trash_can from "../../icons/trash_can.png";
import complete from "../../icons/complete.png";

const Todo_list_item = (props) =>
{
    const [item_data, set_item_data] = useState({
        "task": props.data.task,
        "completed": props.data.completed
    })

    const [img_visible, set_img_visible] = useState(item_data.completed);



    const update_todo_item = async (id, data) =>
    {
        try
        {
            const result1 = await axios(
                {
                    "method": "patch",
                    "url": `http://127.0.0.1:80/api/v1/todo/${id}`,
                    "data": {
                        "task": data.task,
                        "completed": true
                    }
                })
        }
        catch (err)
        {
            console.log(err)
        }
    }

    const handle_remove_todo = async () =>
    {
        try
        {
            const result1 = await axios(
                {
                    "method": "Delete",
                    "url": `http://127.0.0.1:80/api/v1/todo/${item_data.task}`
                }
            )
            props.fetch_data();
            
        }
        catch (err)
        {
            console.log(err)
        }
    }


    const handle_complete = async () =>
    {

        set_item_data({
            "task": props.data.task,
            "completed": true
        })
        set_img_visible(true);
        console.log(item_data);

        await update_todo_item(props.data.task, item_data);
    }

    return (
        <div className={s.Todo_item_container}>
            <p className={s.Todo_text}>{item_data.task}</p>

            {/* when icon is clicked its dissapear */}
            {!img_visible && (<img src={complete} alt="complete task" className={s.Todo_update_icon} onClick={handle_complete} />)}
            <img src={trash_can} alt="remove btn" className={s.Todo_remove_icon} onClick={handle_remove_todo} />

        </div>
    )
}

export default Todo_list_item;