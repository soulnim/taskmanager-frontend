// src/App.jsx
import { useState, useEffect } from "react";
import { fetchTasks, createTask, updateTask, deleteTask } from "./api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const res = await fetchTasks();
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!newTitle) return;
    await createTask({ title: newTitle, completed: false });
    setNewTitle("");
    loadTasks();
  };

  const toggleComplete = async (task) => {
    await updateTask(task.id, { ...task, completed: !task.completed });
    loadTasks();
  };

  const removeTask = async (task) => {
    await deleteTask(task.id);
    loadTasks();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>
      <input
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="New task..."
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task)}
            />
            {task.title}
            <button onClick={() => removeTask(task)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;