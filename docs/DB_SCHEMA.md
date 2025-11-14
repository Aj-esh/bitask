# MongoDB Database Schema Documentation

## User Model

The `User` model represents a user in the chat application. It includes the following fields:

- **username**: String, required, unique. The username of the user.
- **password**: String, required. The hashed password of the user.
- **createdAt**: Date, default: current date. The date when the user was created.
- **updatedAt**: Date, default: current date. The date when the user was last updated.

### Example Schema

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
```

## Message Model

The `Message` model represents a message sent in the chat application. It includes the following fields:

- **sender**: ObjectId, required. A reference to the `User` who sent the message.
- **content**: String, required. The content of the message.
- **timestamp**: Date, default: current date. The date and time when the message was sent.

### Example Schema

```javascript
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Message', messageSchema);
```

## Summary

This document outlines the MongoDB schemas for the `User` and `Message` models used in the Node.js chat application. The `User` model handles user authentication and management, while the `Message` model facilitates the storage and retrieval of chat messages.