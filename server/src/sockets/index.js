const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Import socket event handlers
const { handleConnection } = require('./events');

// Set up socket.io connection
io.on('connection', handleConnection);

// Export the server and io for use in other modules
module.exports = { server, io };