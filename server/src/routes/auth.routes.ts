import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';
import { validateRegistration, validateLogin } from '../utils/validators';

const router = Router();

// Route for user registration
router.post('/register', validateRegistration, register);

// Route for user login
router.post('/login', validateLogin, login);

export default router;