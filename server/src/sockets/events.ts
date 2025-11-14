import { Server } from "socket.io";
import { Socket } from "socket.io-client";

const events = (io: Server) => {
    io.on("connection", (socket: Socket) => {
        console.log(`User connected: ${socket.id}`);

        socket.on("joinRoom", (room: string) => {
            socket.join(room);
            console.log(`User ${socket.id} joined room: ${room}`);
        });

        socket.on("leaveRoom", (room: string) => {
            socket.leave(room);
            console.log(`User ${socket.id} left room: ${room}`);
        });

        socket.on("sendMessage", (data: { room: string; message: string; sender: string }) => {
            io.to(data.room).emit("messageReceived", data);
            console.log(`Message sent to room ${data.room}: ${data.message}`);
        });

        socket.on("typing", (room: string) => {
            socket.to(room).emit("typing", { userId: socket.id });
            console.log(`User ${socket.id} is typing in room: ${room}`);
        });

        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });
};

export default events;