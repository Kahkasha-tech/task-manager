# Task Manager Application

## Project Title & Brief Description

Task Manager Application is a full-stack web application built using React, Node.js, and Express.js. The application allows users to create, view, update, delete, and manage tasks efficiently. Users can mark tasks as complete or incomplete, filter tasks based on status, edit existing tasks, and identify overdue tasks. The project demonstrates frontend-backend integration using REST APIs and includes persistent data storage using a JSON file.

---

## Live Demo Links

### Frontend (Vercel)

https://task-manager-57s391jd9-kahkasha9455-1952s-projects.vercel.app

### Backend (Render)

https://task-manager-api-8qsu.onrender.com

### GitHub Repository

https://github.com/Kahkasha-tech/task-manager

---

## Tech Stack

### Frontend

* React

  * Used for building reusable UI components and managing application state.
* Axios

  * Used for making HTTP requests to the backend API.
* Vite

  * Fast development environment and build tool for React applications.

### Backend

* Node.js

  * JavaScript runtime environment.
* Express.js

  * Framework used to build RESTful APIs.
* UUID

  * Used to generate unique IDs for tasks.
* fs-extra

  * Used for reading and writing task data to a JSON file.

### Deployment

* Vercel

  * Frontend hosting platform.
* Render

  * Backend hosting platform.

---

## How to Run Locally

### Clone Repository

```bash
git clone https://github.com/Kahkasha-tech/task-manager.git
cd task-manager
```

### Backend Setup

```bash
cd server
npm install
node server.js
```

Backend runs on:

```text
http://localhost:5000
```

### Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## API Documentation

### Get All Tasks

Method:

```http
GET
```

Path:

```http
/api/tasks
```

Response:

```json
[
  {
    "id": "123",
    "title": "Learn React",
    "description": "Practice Hooks",
    "dueDate": "2026-06-20",
    "completed": false
  }
]
```

---

### Create Task

Method:

```http
POST
```

Path:

```http
/api/tasks
```

Request Body:

```json
{
  "title": "Learn React",
  "description": "Practice Hooks",
  "dueDate": "2026-06-20"
}
```

Response:

```json
{
  "id": "generated-id",
  "title": "Learn React",
  "description": "Practice Hooks",
  "dueDate": "2026-06-20",
  "completed": false
}
```

---

### Update Task

Method:

```http
PUT
```

Path:

```http
/api/tasks/:id
```

Request Body:

```json
{
  "title": "Updated Title",
  "description": "Updated Description",
  "dueDate": "2026-06-25"
}
```

Response:

```json
{
  "message": "Task updated successfully"
}
```

---

### Delete Task

Method:

```http
DELETE
```

Path:

```http
/api/tasks/:id
```

Response:

```json
{
  "message": "Task deleted successfully"
}
```

---

### Toggle Task Status

Method:

```http
PATCH
```

Path:

```http
/api/tasks/:id/toggle
```

Response:

```json
{
  "message": "Task status updated"
}
```

---

## Project Structure

```text
task-manager
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskList.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── server.js
│   ├── tasks.json
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

### Folder Description

* client/ → React frontend application
* server/ → Express backend application
* tasks.json → Persistent task storage
* README.md → Project documentation

---

## Features

* Create Tasks
* View Tasks
* Edit Tasks
* Delete Tasks
* Mark Complete / Incomplete
* Task Filtering
* Active Task Count
* Completed Task Count
* Overdue Task Highlighting
* Persistent Data Storage
* Responsive User Interface
* Full Stack Deployment

---

## Next Steps

Given more time, the following improvements could be implemented:

1. User Authentication and Authorization.
2. MongoDB Database Integration instead of JSON file storage.
3. Search Functionality.
4. Task Categories and Priority Levels.
5. Due Date Notifications.
6. Dark Mode Support.
7. Drag-and-Drop Task Reordering.
8. Unit and Integration Testing.
9. Docker-based Deployment.
10. CI/CD Pipeline Integration.

---

## Author

Kahkasha Naz

Task Manager Application – Full Stack Assessment Project

