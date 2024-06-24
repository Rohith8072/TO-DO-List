import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        setTasks([...tasks, task]);
        setTask('');
    };

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    function Movetaskup(index){

        if(index > 0){
            const updatededTasks = [...tasks];
            [updatededTasks[index],updatededTasks[index - 1]]=
            [updatededTasks[index - 1],updatededTasks[index]];
            setTasks(updatededTasks);

        }

    }

    function Movetaskdown(index){

        if(index < tasks.length - 1){
            const updatededTasks = [...tasks];
            [updatededTasks[index],updatededTasks[index + 1]]=
            [updatededTasks[index + 1],updatededTasks[index]];
            setTasks(updatededTasks);

        }
        
    }

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                className="input"
                type="text"
                placeholder="Enter the text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button
            className="add-button" 
            onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button 
                        className="delete-button"
                        onClick={() => handleDeleteTask(index)}>
                            Delete ❌❌
                             </button>
                        <button
                        className="move-button"
                        onClick={()  => Movetaskup(index)}> 
                            ☝☝
                        </button>
                        <button
                        className="move-button"
                        onClick={()  => Movetaskdown(index)}> 
                         👇👇
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
