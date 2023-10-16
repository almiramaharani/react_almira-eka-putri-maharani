import React from "react";
import './ChatBubble.css';

const ChatBubble = ({ content, isUser }) => {
    return (
        <div className={`chat-bubble ${isUser ? 'user' : 'ai'}`}>
            {content}
        </div>
    );
};

export default ChatBubble;