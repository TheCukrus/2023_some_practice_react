import Todo_list_item from "./Todo_list_item.jsx";
import { v4 as uuidv4 } from "uuid";

const Todo_list = (props) =>
{

    const tasks = props.data;
    // Partition tasks into two arrays, one for completed tasks and one for incomplete tasks
    const [incomplete_tasks, complete_tasks] = tasks.reduce(([incomplete, completed], task) =>
    {
        if (task.completed)
        {
            return [incomplete, [...completed, task]];
        } else
        {
            return [[...incomplete, task], completed];
        }
    }, [[], []]);

    return (
        <div>

            {/* render incomplete tasks */}
            {incomplete_tasks.map((todo) => (
                <Todo_list_item key={uuidv4()} data={todo} set_data={props.set_data} fetch_data={props.fetch_data} />
            ))}

            {/*render completed tasks*/}
            {complete_tasks.map((todo) => (
                <Todo_list_item key={uuidv4()} data={todo} set_data={props.set_data} fetch_data={props.fetch_data} />
            ))}
        </div>
    )
}

export default Todo_list; 