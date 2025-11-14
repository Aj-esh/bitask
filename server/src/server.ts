import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { json, urlencoded } from 'body-parser';
import { connectDB } from './config/db';
import authRoutes from './routes/auth.routes';
import messageRoutes from './routes/message.routes';
import { setupSockets } from './sockets';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// Database connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

// Socket.io setup
setupSockets(io);

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});