import { useState, useEffect } from "react";
import axios from "axios";

function TaskForm({
  fetchTasks,
  editingTask,
  setEditingTask,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [dueDate, setDueDate] = useState("");

  const API_URL =
    "https://task-manager-api-8qsu.onrender.com/api/tasks";

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(
        editingTask.description
      );
      setDueDate(editingTask.dueDate);
    }
  }, [editingTask]);

  const handleSubmit = async () => {
    try {
      if (editingTask) {
        await axios.put(
          `${API_URL}/${editingTask.id}`,
          {
            title,
            description,
            dueDate,
          }
        );

        alert("Task Updated Successfully");

        setEditingTask(null);
      } else {
        await axios.post(API_URL, {
          title,
          description,
          dueDate,
        });

        alert("Task Added Successfully");
      }

      fetchTasks();

      setTitle("");
      setDescription("");
      setDueDate("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <h2>
        {editingTask
          ? "Edit Task"
          : "Add Task"}
      </h2>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) =>
          setDueDate(e.target.value)
        }
      />

      <button onClick={handleSubmit}>
        {editingTask
          ? "Update Task"
          : "Add Task"}
      </button>
    </div>
  );
}

export default TaskForm;