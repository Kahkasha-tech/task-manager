const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs-extra");

const app = express();

app.use(cors());
app.use(express.json());

const FILE_PATH = "./tasks.json";

let tasks = [];

// Load tasks from file when server starts
const loadTasks = async () => {
  try {
    const exists = await fs.pathExists(FILE_PATH);

    if (exists) {
      tasks = await fs.readJson(FILE_PATH);
    }
  } catch (error) {
    console.log(error);
  }
};

// Save tasks to file
const saveTasks = async () => {
  try {
    await fs.writeJson(FILE_PATH, tasks, {
      spaces: 2,
    });
  } catch (error) {
    console.log(error);
  }
};

loadTasks();

app.get("/", (req, res) => {
  res.send("Task Manager API Running");
});

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", async (req, res) => {
     console.log("POST BODY:", req.body);
  const task = {
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description || "",
    dueDate: req.body.dueDate || "",
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(task);

  await saveTasks();

  res.status(201).json(task);
});

app.delete("/api/tasks/:id", async (req, res) => {
  tasks = tasks.filter(
    (task) => task.id !== req.params.id
  );

  await saveTasks();

  res.json({
    message: "Task deleted successfully",
  });
});

app.put("/api/tasks/:id", async (req, res) => {
  tasks = tasks.map((task) =>
    task.id === req.params.id
      ? { ...task, ...req.body }
      : task
  );

  await saveTasks();

  res.json({
    message: "Task updated successfully",
  });
});

app.patch(
  "/api/tasks/:id/toggle",
  async (req, res) => {
    tasks = tasks.map((task) =>
      task.id === req.params.id
        ? {
            ...task,
            completed: !task.completed,
          }
        : task
    );

    await saveTasks();

    res.json({
      message: "Task status updated",
    });
  }
);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});