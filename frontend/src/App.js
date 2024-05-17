import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    axios.get('/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.log(error));
  }, []);

  const addTask = () => {
    axios.post('/api/tasks', { task })
      .then(response => {
        setTasks([...tasks, { task }]);
        setTask("");
      })
      .catch(error => console.log(error));
  };

  const deleteTask = (taskId) => {
    axios.delete(`/api/tasks/${taskId}`)
      .then(response => {
        setTasks(tasks.filter((_, index) => index !== taskId));
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
