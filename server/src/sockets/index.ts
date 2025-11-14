import { Server } from "socket.io";
import http from "http";
import { EventEmitter } from "events";

const eventEmitter = new EventEmitter();

const initializeSocket = (server: http.Server) => {
    const io = new Server(server);

    io.on("connection", (socket) => {
        console.log("A user connected:", socket.id);

        socket.on("joinRoom", (room) => {
            socket.join(room);
            console.log(`User ${socket.id} joined room: ${room}`);
        });

        socket.on("sendMessage", (message) => {
            const { room, content, sender } = message;
            io.to(room).emit("receiveMessage", { content, sender });
            console.log(`Message sent to room ${room}: ${content}`);
        });

        socket.on("typing", (room) => {
            socket.to(room).emit("typing", socket.id);
        });

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    });

    return io;
};

export { initializeSocket, eventEmitter };