# API Documentation

## Authentication Endpoints

### 1. User Registration
- **Endpoint:** `POST /api/auth/register`
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  - **201 Created**
    ```json
    {
      "message": "User registered successfully."
    }
    ```
  - **400 Bad Request**
    ```json
    {
      "error": "Username already exists."
    }
    ```

### 2. User Login
- **Endpoint:** `POST /api/auth/login`
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  - **200 OK**
    ```json
    {
      "token": "string"
    }
    ```
  - **401 Unauthorized**
    ```json
    {
      "error": "Invalid credentials."
    }
    ```

## Message Endpoints

### 3. Send Message
- **Endpoint:** `POST /api/messages`
- **Request Body:**
  ```json
  {
    "content": "string",
    "sender": "string"
  }
  ```
- **Response:**
  - **201 Created**
    ```json
    {
      "message": "Message sent successfully."
    }
    ```
  - **400 Bad Request**
    ```json
    {
      "error": "Message content cannot be empty."
    }
    ```

### 4. Retrieve Messages
- **Endpoint:** `GET /api/messages`
- **Response:**
  - **200 OK**
    ```json
    [
      {
        "sender": "string",
        "content": "string",
        "timestamp": "string"
      }
    ]
    ```

## Summary
This API provides endpoints for user authentication and message handling, enabling a chat application to manage user sessions and facilitate real-time communication.