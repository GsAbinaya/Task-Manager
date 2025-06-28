


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskTable from "../components/TaskTable";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import "./Home.css";

const Home = () => {
const [tasks, setTasks] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const tasksPerPage = 5;

useEffect(() => {
const stored = localStorage.getItem("tasks");
if (stored) setTasks(JSON.parse(stored));
}, []);

const handleDelete = (id) => {
const updated = tasks.filter((t) => t.id !== id);
setTasks(updated);
localStorage.setItem("tasks", JSON.stringify(updated));
};

const filtered = tasks.filter((t) => t.title.toLowerCase().includes(searchTerm.toLowerCase()));
const totalPages = Math.ceil(filtered.length / tasksPerPage);
const start = (currentPage - 1) * tasksPerPage;
const paginated = filtered.slice(start, start + tasksPerPage);

return (
<div className="home-page">
    <div className="home-container">
<h2 className="home-title">Task List</h2>
<Link className="create-link" to="/create">+ Create New Task</Link>
<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
<TaskTable tasks={paginated} handleDelete={handleDelete} />
<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
</div>
</div>
);
};

export default Home;