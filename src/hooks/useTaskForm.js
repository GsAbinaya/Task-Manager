import { useState } from "react";

const useTaskForm = (initialState) => {
const [formData, setFormData] = useState(initialState);

const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prev) => ({ ...prev, [name]: value }));
};

const resetForm = () => setFormData(initialState);

return { formData, handleChange, resetForm };
};

export default useTaskForm;
