import React from "react";
import Todo_list from "./Todo_list.jsx";
import Todo_list_form from "./Todo_list_form.jsx";
import Todo_list_item from "./Todo_list_item.jsx";

const Todo_list_main = () =>
{
    return (
        <div>
            <h1>kello</h1>
            <Todo_list_form />
            <Todo_list_item />
            <Todo_list />
        </div>
    )
}

export default Todo_list_main;