import { useState } from "react";
import axios from "axios";
import s from "./Todo_list.module.css";

const Todo_list_form = (props) =>
{
    const [todo, set_todo] = useState({
        "task": "",
        "completed": false
    });

    const handle_input_change = (e) =>
    {
        set_todo({ ...todo, [e.target.name]: e.target.value });
    }

    const handle_submit = async (e) =>
    {
        try
        {
            e.preventDefault();
            if (!todo.task) return;

            const result1 = await axios({
                "method": "post",
                "url": "http://127.0.0.1/api/v1/todo",
                "data": todo
            })
            //Add the todo to the list
            set_todo(
                {
                    "task": "",
                    "completed": false
                });
            props.fetch_data();
        }
        catch (err)
        {
            console.log(err)
        }
    }

    return (

        <form className={s.Todo_list_form_container} onSubmit={handle_submit}>
            <input
                type="text"
                name="task"
                value={todo.task}
                placeholder="New task!"
                onChange={handle_input_change}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default Todo_list_form;