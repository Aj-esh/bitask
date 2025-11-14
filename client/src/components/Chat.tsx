import React, { useEffect, useState } from 'react';
import { useChat } from '../hooks/useChat';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const Chat: React.FC = () => {
    const { messages, sendMessage, joinChat, leaveChat } = useChat();
    const [username, setUsername] = useState<string>('');

    useEffect(() => {
        if (username) {
            joinChat(username);
        }
        return () => {
            leaveChat();
        };
    }, [username, joinChat, leaveChat]);

    const handleUsernameSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const input = (e.target as HTMLFormElement).elements.namedItem('username') as HTMLInputElement;
        setUsername(input.value);
    };

    return (
        <div className="chat-container">
            {!username ? (
                <form onSubmit={handleUsernameSubmit}>
                    <input type="text" name="username" placeholder="Enter your username" required />
                    <button type="submit">Join Chat</button>
                </form>
            ) : (
                <>
                    <MessageList messages={messages} />
                    <MessageInput sendMessage={sendMessage} />
                </>
            )}
        </div>
    );
};

export default Chat;