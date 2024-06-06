import React, { useState } from 'react';
import axios from 'axios';
import './TaskItem.css';

const TaskItem = ({ task, fetchTasks, moveTaskUp, moveTaskDown }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({ ...task });

    const handleComplete = async () => {
        try {
            await axios.put(`http://localhost:3000/api/tasks/${task._id}`, {
                ...task,
                completed: !task.completed,
            });
            fetchTasks();
        } catch (error) {
            console.error('Error updating task', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/api/tasks/${task._id}`);
            fetchTasks();
        } catch (error) {
            console.error('Error deleting task', error);
        }
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedTask({ ...editedTask, [name]: value });
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/tasks/${task._id}`, editedTask);
            setIsEditing(false);
            fetchTasks();
        } catch (error) {
            console.error('Error updating task', error);
        }
    };

    return (
        <div className="task-item">
            {isEditing ? (
                <form onSubmit={handleEditSubmit} className="task-edit-form">
                    <label>
                        Title:
                        <input
                            type="text"
                            name="title"
                            value={editedTask.title}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Description:
                        <input
                            type="text"
                            name="description"
                            value={editedTask.description}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Due Date:
                        <input
                            type="date"
                            name="dueDate"
                            value={editedTask.dueDate ? editedTask.dueDate.split('T')[0] : ''}
                            onChange={handleEditChange}
                        />
                    </label>
                    <label>
                        Category:
                        <input
                            type="text"
                            name="category"
                            value={editedTask.category}
                            onChange={handleEditChange}
                        />
                    </label>
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <>
                    <div className={`task-details ${task.completed ? 'completed' : ''}`}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>{task.dueDate ? task.dueDate.split('T')[0] : ''}</p>
                        <p>{task.category}</p>
                    </div>
                    <div className="task-actions">
                        <button onClick={handleComplete}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                        <button onClick={moveTaskUp}>Move Up</button>
                        <button onClick={moveTaskDown}>Move Down</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default TaskItem;
