import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/tasks');
            setTasks(response.data.sort((a, b) => a.priority - b.priority));
        } catch (error) {
            console.error('Error fetching tasks', error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const updateTaskPriority = async (taskId, newPriority) => {
        try {
            await axios.put(`http://localhost:3000/api/tasks/${taskId}`, { priority: newPriority });
            fetchTasks(); // Refresh tasks after updating priority
        } catch (error) {
            console.error('Error updating task priority', error);
        }
    };

    const moveTaskUp = (index) => {
        if (index === 0) return;
        const newTasks = [...tasks];
        const [movedTask, displacedTask] = [newTasks[index], newTasks[index - 1]];
        movedTask.priority--;
        displacedTask.priority++;
        newTasks[index] = displacedTask;
        newTasks[index - 1] = movedTask;
        setTasks(newTasks);
        updateTaskPriority(movedTask._id, movedTask.priority);
        updateTaskPriority(displacedTask._id, displacedTask.priority);
    };

    const moveTaskDown = (index) => {
        if (index === tasks.length - 1) return;
        const newTasks = [...tasks];
        const [movedTask, displacedTask] = [newTasks[index], newTasks[index + 1]];
        movedTask.priority++;
        displacedTask.priority--;
        newTasks[index] = displacedTask;
        newTasks[index + 1] = movedTask;
        setTasks(newTasks);
        updateTaskPriority(movedTask._id, movedTask.priority);
        updateTaskPriority(displacedTask._id, displacedTask.priority);
    };

    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <TaskItem
                    key={task._id}
                    task={task}
                    fetchTasks={fetchTasks}
                    moveTaskUp={() => moveTaskUp(index)}
                    moveTaskDown={() => moveTaskDown(index)}
                />
            ))}
        </div>
    );
};

export default TaskList;
