import { Link } from "react-router-dom";
import "./TaskTable.css";

const TaskTable = ({ tasks, handleDelete }) => {
return (
    <div className="task-table-wrapper">
        
<table className="task-table">
<thead>
<tr>
<th>Title</th>
<th>Status</th>
<th>Due Date</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{tasks.map((task) => (
<tr key={task.id}>
<td>{task.title}</td>
<td>{task.status}</td>
<td>{task.dueDate}</td>
<td>
<Link to={`/edit/${task.id}`}>Edit</Link>
<button onClick={() => handleDelete(task.id)}>Delete</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
);
};

export default TaskTable;