# WebSocket Events Documentation

## WebSocket Events

### 1. Connection Events

- **connect**
  - Triggered when a client successfully connects to the WebSocket server.
  - Payload: `{ userId: string }`

- **disconnect**
  - Triggered when a client disconnects from the WebSocket server.
  - Payload: `{ userId: string }`

### 2. Room Management Events

- **joinRoom**
  - Triggered when a user joins a chat room.
  - Payload: `{ roomId: string, userId: string }`

- **leaveRoom**
  - Triggered when a user leaves a chat room.
  - Payload: `{ roomId: string, userId: string }`

### 3. Messaging Events

- **sendMessage**
  - Triggered when a user sends a message.
  - Payload: `{ roomId: string, message: { senderId: string, content: string, timestamp: Date } }`

- **receiveMessage**
  - Triggered when a message is received in a chat room.
  - Payload: `{ roomId: string, message: { senderId: string, content: string, timestamp: Date } }`

### 4. Typing Indicator Events

- **typing**
  - Triggered when a user is typing a message.
  - Payload: `{ roomId: string, userId: string }`

- **stopTyping**
  - Triggered when a user stops typing.
  - Payload: `{ roomId: string, userId: string }`

### 5. Presence Events

- **userJoined**
  - Triggered when a new user joins a room.
  - Payload: `{ roomId: string, userId: string }`

- **userLeft**
  - Triggered when a user leaves a room.
  - Payload: `{ roomId: string, userId: string }`

## Summary

WebSocket event structure is designed to support real-time communication in the chatspace, allowing users to send and receive messages instantly, manage their presence in chat rooms, and indicate typing status. This enhances the user experience by providing immediate feedback and interaction capabilities.