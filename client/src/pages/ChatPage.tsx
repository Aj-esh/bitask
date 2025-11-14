import React, { useEffect } from 'react';
import { useChat } from '../hooks/useChat';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';

const ChatPage: React.FC = () => {
    const { messages, fetchMessages } = useChat();

    useEffect(() => {
        fetchMessages();
    }, [fetchMessages]);

    return (
        <div className="chat-page">
            <h1>Chat Room</h1>
            <MessageList messages={messages} />
            <MessageInput />
        </div>
    );
};

export default ChatPage;