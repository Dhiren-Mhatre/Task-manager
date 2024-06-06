import React, { useState } from 'react';
import axios from 'axios';
import './TaskForm.css';

const TaskForm = ({ fetchTasks }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!title || !description || !dueDate || !category) {
                setError('All fields are required');
                return;
            }
            setError('');
            await axios.post('http://localhost:3000/api/tasks', {
                title,
                description,
                dueDate,
                category,
                priority: 0
            });
            setTitle('');
            setDescription('');
            setDueDate('');
            setCategory('');
            fetchTasks();
            window.location.reload(); // Fetch tasks after adding a new task
        } catch (error) {
            console.error('Error saving task', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            {error && <div className="error">{error}</div>}
            <label>
                Title:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <label>
                Description:
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <label>
                Due Date:
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                />
            </label>
            <label>
                Category:
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
