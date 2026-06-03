import { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        "https://task-manager-api-8qsu.onrender.com/api/tasks"
      );

      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const activeTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <div className="stats">
        <div className="card">
          Active Tasks: {activeTasks}
        </div>

        <div className="card">
          Completed Tasks: {completedTasks}
        </div>
      </div>

      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>
          All
        </button>

        <button onClick={() => setFilter("active")}>
          Active
        </button>

        <button onClick={() => setFilter("completed")}>
          Completed
        </button>
      </div>

      <TaskForm
        fetchTasks={fetchTasks}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />

      <TaskList
        tasks={filteredTasks}
        fetchTasks={fetchTasks}
        setEditingTask={setEditingTask}
      />
    </div>
  );
}

export default App;
