
# Task Manager Application

## Project Overview

The Task Manager Application is a full-stack web application developed using React, Node.js, and Express.js. It helps users manage their daily tasks by allowing them to create, update, delete, and track task completion status.

The application includes task filtering, overdue task highlighting, task statistics, and persistent storage. The frontend is deployed on Vercel, while the backend is deployed on Render.

---

## Live Demo Links

### Frontend (Vercel)

https://task-manager-xi-six-45.vercel.app/

### Backend (Render)

https://task-manager-api-8qsu.onrender.com

### GitHub Repository

https://github.com/Kahkasha-tech/task-manager

---

## Features

* Create New Tasks
* View All Tasks
* Edit Existing Tasks
* Delete Tasks
* Mark Tasks as Complete / Incomplete
* Filter Tasks (All, Active, Completed)
* Active Task Count
* Completed Task Count
* Overdue Task Highlighting
* Persistent Data Storage
* Responsive User Interface

---

## Tech Stack

### Frontend

* React
* Axios
* Vite

### Backend

* Node.js
* Express.js
* UUID

### Storage

* JSON File Storage (`tasks.json`)

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## How to Run Locally

### Clone Repository

```bash
git clone https://github.com/Kahkasha-tech/task-manager.git
cd task-manager
```

### Run Backend

```bash
cd server
npm install
node server.js
```

Backend will run on:

```text
http://localhost:5000
```

### Run Frontend

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## API Documentation

### Get All Tasks

```http
GET /api/tasks
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

### Create Task

```http
POST /api/tasks
```

Request Body:

```json
{
  "title": "Learn React",
  "description": "Practice Hooks",
  "dueDate": "2026-06-20"
}
```

### Update Task

```http
PUT /api/tasks/:id
```

### Delete Task

```http
DELETE /api/tasks/:id
```

### Toggle Task Status

```http
PATCH /api/tasks/:id/toggle
```

---

## Project Structure

```text
task-manager
│
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskList.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server
│   ├── server.js
│   ├── tasks.json
│   └── package.json
│
└── README.md
```

### Folder Description

* `client/` → React frontend application
* `server/` → Express backend APIs
* `tasks.json` → Stores task data
* `README.md` → Project documentation

---

## Deployment

### Frontend

Deployed on Vercel:

https://task-manager-xi-six-45.vercel.app/

### Backend

Deployed on Render:

https://task-manager-api-8qsu.onrender.com


## Challenges Faced

- Integrating React frontend with Express backend.
- Managing task state after CRUD operations.
- Deploying and connecting frontend and backend in production.


## Future Improvements

If given more time, I would add:

* User Authentication
* MongoDB Database Integration
* Search Functionality
* Task Priority Levels
* Dark Mode
* Email Notifications
* Unit Testing







## Author

Kahkasha Naz

Full Stack Task Manager Project
