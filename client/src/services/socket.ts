import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:5000"; // Update with your server URL

const socket = io(SOCKET_SERVER_URL);

socket.on("connect", () => {
    console.log("Connected to the WebSocket server");
});

socket.on("disconnect", () => {
    console.log("Disconnected from the WebSocket server");
});

// Event listeners for real-time messaging
socket.on("message", (message) => {
    console.log("New message received:", message);
});

socket.on("typing", (username) => {
    console.log(`${username} is typing...`);
});

// Function to send a message
export const sendMessage = (message) => {
    socket.emit("message", message);
};

// Function to notify typing
export const notifyTyping = (username) => {
    socket.emit("typing", username);
};

export default socket;