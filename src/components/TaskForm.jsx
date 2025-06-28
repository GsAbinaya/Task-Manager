
import React from "react";
import "./TaskForm.css";

const TaskForm = ({ formData, handleChange, handleSubmit }) => {
return (
    
<form  className ="task-form" onSubmit={handleSubmit}>
    <h2 className="form-title">TaskDetails</h2>
<input
name="title"
placeholder="Task Name"
value={formData.title}
onChange={handleChange}
required
/>

<input
name="description"
placeholder="Description"
value={formData.description}
onChange={handleChange}
required
/>

<input
name="dueDate"
type="date"
value={formData.dueDate}
onChange={handleChange}
required
/>

<select name="status" value={formData.status} onChange={handleChange}>
<option value="pending">Pending</option>

<option value="done">Done</option>
</select>
<br />
<button type="submit" >Save Task</button>
</form>
);
};

export default TaskForm;