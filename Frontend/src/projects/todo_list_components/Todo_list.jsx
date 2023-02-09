import Todo_list_item from "./Todo_list_item.jsx";

const Todo_list = (props) =>
{
    const todos = props.data;

    return (
        <div>
            <h1>All todos</h1>
            {todos.map((ele, i) => <Todo_list_item key={i} data={ele} fetch_data={props.fetch_data} />)}
        </div>
    )
}

export default Todo_list;