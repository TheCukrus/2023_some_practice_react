import axios from "axios";
import { useState, useEffect } from "react";
import Todo_list from "./Todo_list.jsx";
import Todo_list_form from "./Todo_list_form.jsx";

const Todo_list_main = () =>
{

    const [data, set_data] = useState([])
    const [data_fetched, set_data_fetched] = useState(false);

    const fetch_data = async () =>
    {
        try
        {
            const result1 = await axios(
                {
                    "method": "get",
                    "url": "http://127.0.0.1:80/api/v1/todo"
                }
            )
            set_data_fetched(true);
            return set_data(result1.data);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    useEffect(() => fetch_data, [])
    console.log(data)

    if (!data_fetched)
    {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <h1>kello</h1>
            <Todo_list_form />
            <Todo_list data={data}/>
        </div>
    )
}

export default Todo_list_main;