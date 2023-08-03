import React from 'react'
import { FC } from 'react';
interface ChatItemProps {
    fromUser: boolean;
    msg: string;
    isTyping: boolean;
  }
  
const ChatItem: FC<ChatItemProps> = ({ fromUser, msg, isTyping }) => {
    return (
        <div className={`chat-item ${fromUser ? "fromUser" : "fromChat"} ${isTyping ? "typing-message" : ""}`}>
            <div className="chat-item-content" >
                {msg}
            </div>
        </div>
    );
};
  
  export default ChatItem;
