# Node.js and React Chat Application

## Overview
This project is a real-time chat application built using Node.js for the backend and React for the frontend. It utilizes Socket.io for real-time communication and MongoDB for data storage. The application supports user authentication and message retrieval through a REST API, along with WebSocket events for real-time messaging.

## Technology Stack
- **Backend:**
  - **Node.js**: A JavaScript runtime for building scalable network applications.
  - **Express**: A web framework for Node.js to handle routing and middleware.
  - **Socket.io**: A library for real-time web applications, enabling bidirectional communication between clients and servers.
  - **MongoDB**: A NoSQL database for storing user and message data.
  - **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.

- **Frontend:**
  - **React**: A JavaScript library for building user interfaces, allowing for the creation of reusable UI components.
  - **TypeScript**: A superset of JavaScript that adds static types, enhancing code quality and maintainability.
  - **Socket.io-client**: The client-side library for Socket.io to enable real-time communication.

## Project Structure
- **server/**: Contains the backend code, including the server setup, API routes, controllers, models, and Socket.io configuration.
- **client/**: Contains the frontend code, including React components, pages, and services for API and WebSocket communication.
- **docs/**: Documentation for the database schema, API endpoints, WebSocket events, and technology stack rationale.

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB instance running
- Docker (optional, for containerized setup)

### Backend Setup
1. Navigate to the `server` directory:
   ```
   cd server
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on `.env.example` and configure your environment variables.
4. Start the server:
   ```
   npm start
   ```

### Frontend Setup
1. Navigate to the `client` directory:
   ```
   cd client
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

### Docker Setup (Optional)
1. Build the Docker images:
   ```
   docker-compose build
   ```
2. Run the application:
   ```
   docker-compose up
   ```

## Usage
- Access the application in your browser at `http://localhost:3000`.
- Use the login page to authenticate users and access the chat interface.

## Contribution
Feel free to fork the repository and submit pull requests for any improvements or features.

## License
This project is licensed under the MIT License.