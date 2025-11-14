import { Router } from 'express';
import { getMessages, sendMessage } from '../controllers/message.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

// Route to retrieve messages
router.get('/', authMiddleware, getMessages);

// Route to send a new message
router.post('/', authMiddleware, sendMessage);

export default router;