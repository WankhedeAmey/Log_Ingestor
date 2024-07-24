# Log Ingestor with Query Interface

## Query Interface with dynamic query generator
![Query Section with dynamic query generator](https://github.com/WankhedeAmey/Log_Ingestor/blob/main/img/ss_query.png?raw=true)
## Filtered Logs section with clean styles
![Filtered logs being shown with clean styling](https://github.com/WankhedeAmey/Log_Ingestor/blob/main/img/ss_log.png?raw=true)


## Overview

This project is a full-stack log ingestion system with a query interface. It consists of a backend built with Node.js and Express, and a frontend built with React, Tailwind CSS, and PostCSS. The application allows users to create, store, and fetch logs based on various filters, providing a clean and minimal user interface.

## Backend

The backend is implemented using:

- **Node.js**: JavaScript runtime environment.
- **Express**: Web application framework for building RESTful APIs.
- **CORS**: Middleware to handle cross-origin requests.
- **MongoDB**: NoSQL database for storing logs.

The backend supports:

- **Creating Logs**: Endpoint to create a new log entry.
- **Storing Logs**: Endpoint to store log entries in the database.
- **Fetching Filtered Logs**: Endpoint to retrieve logs based on query filters.

### Folder Structure

- `helper/`: Contains utility functions and helpers.
- `src/`: Main source code for API routes and logic.

## Frontend

The frontend is built with:

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **PostCSS**: Tool for transforming CSS with JavaScript plugins.
- **Axios**: Promise-based HTTP client for making requests to the backend.

### Features

- **Query Form**: Build a query to filter logs by various criteria such as:
  - **Level**: Log severity level.
  - **Resource ID**: Identifier for the resource.
  - **Trace ID**: Identifier for the trace.
  - **Span ID**: Identifier for the span.
  - **Commit**: Commit identifier.
  - **Parent Resource ID**: Identifier for the parent resource.
  - **Date Range**: Filter logs based on a start and end time.

- **Filtered Logs Display**: Logs are displayed with a clean and minimal UI, using a color palette that ensures easy readability.

### Folder Structure

- `public/`: Public assets and index HTML.
- `src/`: Main source code for React components and state management.
- `tailwind.config.js`: Configuration for Tailwind CSS.
- `vite.config.js`: Configuration for Vite.

## Installation

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   npm install
   npm start

### Frontend

1. Navigate to the `frontend` directory:
  ```
  cd frontend
  npm install
  npm run dev
  ```

## Usage

	1.	Run the Backend: Ensure the backend server is running.
	2.	Run the Frontend: Start the frontend development server.
	3.	Access the Application: Open your browser and navigate to http://localhost:5173/ to use the application.
