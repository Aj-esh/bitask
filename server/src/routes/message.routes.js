const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message.controller');

// Route to send a message
router.post('/messages', messageController.sendMessage);

// Route to retrieve messages
router.get('/messages', messageController.getMessages);

module.exports = router;