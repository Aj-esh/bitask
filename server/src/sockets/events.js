const events = require('events');
const eventEmitter = new events.EventEmitter();

// Example event handler for a new message
eventEmitter.on('newMessage', (message) => {
    console.log('New message received:', message);
});

// Example event handler for user connection
eventEmitter.on('userConnected', (user) => {
    console.log('User connected:', user);
});

// Example event handler for user disconnection
eventEmitter.on('userDisconnected', (user) => {
    console.log('User disconnected:', user);
});

// Export the event emitter for use in other modules
module.exports = eventEmitter;