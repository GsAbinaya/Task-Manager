import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useTaskForm from "../hooks/useTaskForm";
import TaskForm from "../components/TaskForm";

const EditTask = () => {
const { id } = useParams();
const navigate = useNavigate();
const { formData, handleChange, resetForm, setFormData } = useTaskForm({
title: "",
description: "",
dueDate: "",
status: "pending",
});

useEffect(() => {
const stored = JSON.parse(localStorage.getItem("tasks")) || [];
const task = stored.find((t) => t.id === Number(id));
if (task) {
setFormData(task);
}
}, [id, setFormData]);

const handleSubmit = (e) => {
e.preventDefault();
const stored = JSON.parse(localStorage.getItem("tasks")) || [];
const updated = stored.map((t) => (t.id === Number(id) ? formData : t));
localStorage.setItem("tasks", JSON.stringify(updated));
resetForm();
navigate("/");
};

return (
<div>
<h2>Edit Task</h2>
<TaskForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
</div>
);
};

export default EditTask;