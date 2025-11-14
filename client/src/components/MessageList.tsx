import React from 'react';

interface Message {
    id: string;
    sender: string;
    content: string;
    timestamp: string;
}

interface MessageListProps {
    messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    return (
        <div className="message-list">
            {messages.map((message) => (
                <div key={message.id} className="message">
                    <span className="message-sender">{message.sender}:</span>
                    <span className="message-content">{message.content}</span>
                    <span className="message-timestamp">{new Date(message.timestamp).toLocaleTimeString()}</span>
                </div>
            ))}
        </div>
    );
};

export default MessageList;