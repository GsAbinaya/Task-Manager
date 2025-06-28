


import { useNavigate } from "react-router-dom";
import useTaskForm from "../hooks/useTaskForm";
import TaskForm from "../components/TaskForm";
import "./CreateTask.css";

const CreateTask = () => {
const navigate = useNavigate();
const { formData, handleChange, resetForm } = useTaskForm({
title: "",
description: "",
dueDate: "",
status: "pending",
});

const handleSubmit = (e) => {
e.preventDefault();
const newTask = {
...formData,
id: Date.now(),
};
const stored = JSON.parse(localStorage.getItem("tasks")) || [];
stored.push(newTask);
localStorage.setItem("tasks", JSON.stringify(stored));
resetForm();
navigate("/");
};

return (
<div className="create-task-page">

<TaskForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
</div>
);
};

export default CreateTask;
