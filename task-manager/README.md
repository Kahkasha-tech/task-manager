# Task Manager Application

## Overview

A full-stack Task Management Application built using React, Node.js, and Express.js.

## Features

* Create Tasks
* View Tasks
* Edit Tasks
* Delete Tasks
* Mark Complete / Incomplete
* Filter Tasks (All, Active, Completed)
* Active and Completed Task Counts
* Overdue Task Highlighting
* Empty State Handling
* Persistent Storage using tasks.json

## Technologies Used

### Frontend

* React
* Axios
* Vite

### Backend

* Node.js
* Express.js

### Storage

* JSON File Storage (tasks.json)

## Installation

### Backend

```bash
cd server
npm install
node server.js
```

### Frontend

```bash
cd client
npm install
npm run dev
```

## API Endpoints

### Get All Tasks

GET /api/tasks

### Create Task

POST /api/tasks

### Update Task

PUT /api/tasks/:id

### Delete Task

DELETE /api/tasks/:id

### Toggle Completion

PATCH /api/tasks/:id/toggle

## Project Structure

task-manager
├── client
├── server
├── tasks.json
└── README.md

## Author

Kahkasha Naz
