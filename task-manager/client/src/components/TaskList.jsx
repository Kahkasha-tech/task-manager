import axios from "axios";

function TaskList({
  tasks,
  fetchTasks,
  setEditingTask,
}) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/tasks/${id}`
      );

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggle = async (id) => {
    try {
      await axios.patch(
        `http://localhost:5000/api/tasks/${id}/toggle`
      );

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="card">
        <h2>Tasks</h2>
        <p>No Tasks Found</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Tasks</h2>

      {tasks.map((task) => {
        const isOverdue =
          task.dueDate &&
          new Date(task.dueDate) < new Date() &&
          !task.completed;

        return (
          <div
            key={task.id}
            className={`card ${
              isOverdue ? "overdue" : ""
            }`}
          >
            <h3>{task.title}</h3>

            <p>
              Status:{" "}
              {task.completed
                ? "Completed"
                : "Active"}
            </p>

            {isOverdue && (
              <p className="overdue-text">
                Overdue Task
              </p>
            )}

            <p>{task.description}</p>

            <p>{task.dueDate}</p>

            <button
              onClick={() =>
                handleToggle(task.id)
              }
            >
              {task.completed
                ? "Mark Incomplete"
                : "Mark Complete"}
            </button>

            <button
              onClick={() =>
                setEditingTask(task)
              }
            >
              Edit
            </button>

            <button
              onClick={() =>
                handleDelete(task.id)
              }
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;