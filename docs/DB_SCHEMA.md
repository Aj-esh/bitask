# MongoDB Database Schema Documentation

## User Model

The `User` model for a user in the chatspace. 
Following fields:

- **username**: String, required, unique. The username of the user.
- **password**: String, required. The hashed password
- **createdAt**: Date, default: current date. (user was created)
- **updatedAt**: Date, default: current date. (user was last updated)

## Message Model

The `Message` model for a message sent in the chatspace. 
Following fields:

- **sender**: ObjectId, required. (Reference to the `User`)
- **content**: String, required. (content of the message)
- **timestamp**: Date, default: current date. (date and time)

### Example Schema

## Summary

MongoDB schemas for the `User` and `Message` models used in the bitask-chatspace. The `User` model handles user authentication and management, while the `Message` model facilitates the storage and retrieval of chat messages.