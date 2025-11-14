import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const useChat = (roomId: string) => {
    const [messages, setMessages] = useState<Array<{ sender: string; content: string; timestamp: string }>>([]);
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io(process.env.REACT_APP_SOCKET_URL || 'http://localhost:4000');
        setSocket(newSocket);

        newSocket.emit('joinRoom', roomId);

        newSocket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            newSocket.disconnect();
        };
    }, [roomId]);

    const sendMessage = (message: { sender: string; content: string }) => {
        if (socket) {
            socket.emit('sendMessage', { ...message, roomId });
        }
    };

    return { messages, sendMessage };
};

export default useChat;