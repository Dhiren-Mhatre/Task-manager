# To-Do List Application

This is a simple To-Do List application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, view, edit, and delete tasks, as well as categorize them and prioritize them.

## Features

- **Task Management:**
  - Create tasks with a title, description, due date, category, and priority.
  - View a list of all tasks grouped by category.
  - Mark tasks as completed.
  - Edit task details.
  - Delete tasks.
  - Prioritize tasks by shifting them up or down in the list.

- **Persistence:**
  - Tasks are stored and retrieved from a MongoDB database.

- **Validation:**
  - Task titles, descriptions, due dates, categories, and priorities are required and cannot be empty.
  - Users can't mark a task as complete if it's already marked as such.

- **Priority:**
  - Tasks can be prioritized by shifting them up or down in the list.

- **User Interface:**
  - Simple and intuitive user interface built using React.

## Code Structure

The codebase is organized into the following structure:

- **Backend (Node.js with Express):**
  - `models/`: Contains MongoDB schema definitions.
  - `routes/`: Defines API routes for CRUD operations on tasks.
  - `app.js`: Main entry point for the backend application.

- **Frontend (React):**
  - `components/`: Contains React components for task management.
  - `App.js`: Main component for the frontend application.
  - `index.js`: Entry point for rendering the React application.

- **Database (MongoDB):**
  - Tasks are stored in a MongoDB database.

## Instructions

1. **Setup:**
   - Clone the repository: `git clone https://github.com/yourusername/todo-list.git`
   - Navigate to the project directory: `cd todo-list`

2. **Backend Setup:**
   - Navigate to the backend directory: `cd backend`
   - Install dependencies: `npm install`
   - Start the server: `npm start`

3. **Frontend Setup:**
   - Open a new terminal window/tab.
   - Navigate to the frontend directory: `cd frontend`
   - Install dependencies: `npm install`
   - Start the React development server: `npm start`

4. **Usage:**
   - Open your web browser and go to `http://localhost:3000` to access the To-Do List application.
   - Create tasks by filling out the form with a title, description, due date, category, and priority, then click "Add Task".
   - View, edit, mark as complete, prioritize, or delete tasks using the provided buttons and functionality.

## Dependencies

- Backend:
  - `express`: Web framework for Node.js.
  - `mongoose`: MongoDB object modeling for Node.js.
  - `cors`: Middleware for enabling CORS (Cross-Origin Resource Sharing).

- Frontend:
  - `axios`: Promise-based HTTP client for the browser and Node.js.
  - `react-router-dom`: Routing library for React applications.

 
## Key Decisions

- **MERN Stack:** Chosen for its versatility and efficiency in building full-stack web applications.
- **MongoDB:** Used as the database to store task data due to its flexibility and scalability.
- **Express:** Used as the backend framework for its simplicity and robustness in handling HTTP requests and routing.
- **React:** Chosen for the frontend for its component-based architecture, which makes it easy to manage complex UI components and state.
- **Axios:** Used as the HTTP client for making requests between the frontend and backend.
- **React Router:** Employed for client-side routing in the frontend, allowing for a smooth user experience without full page reloads.


