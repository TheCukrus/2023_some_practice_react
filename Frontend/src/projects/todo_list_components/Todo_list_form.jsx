import { useState } from "react";
import axios from "axios";

const Todo_list_form = () =>
{
    const [todo, set_todo] = useState({
        "title": "",
        "description": "",
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
            if (!todo.title || !todo.description) return;

            const result1 = await axios({
                "method": "post",
                "url": "http://127.0.0.1/api/v1/todo",
                "data": todo
            })
            //Add the todo to the list
            set_todo(
                {
                    "title": "",
                    "description": "",
                    "completed": false
                });
            console.log('pavyko')
        }
        catch (err)
        {
            console.log(err)
        }
    }

    return (

        <form onSubmit={handle_submit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={todo.title}
                    onChange={handle_input_change}
                />
            </div>

            <div>
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={todo.description}
                    onChange={handle_input_change}
                />
            </div>

            <button type="submit">Add todo</button>

        </form>
    )
}

export default Todo_list_form;