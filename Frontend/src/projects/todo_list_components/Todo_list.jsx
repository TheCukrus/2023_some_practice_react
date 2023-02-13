import Todo_list_item from "./Todo_list_item.jsx";

const Todo_list = (props) =>
{

    return (
        <div>
            {props.data.map((todo, i) => <Todo_list_item key={i} data={todo} fetch_data={props.fetch_data} />)}
        </div>
    )
}

export default Todo_list;