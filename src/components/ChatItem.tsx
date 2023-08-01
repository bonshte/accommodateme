import React from 'react'
import { FC } from 'react';
interface ChatItemProps {
    fromUser: boolean;
    msg: string;
  }
  
  const ChatItem: FC<ChatItemProps> = ({ fromUser, msg }) => {
      return (
          <div className={`chat-item ${fromUser ? "fromUser" : "fromChat"}`}>
              <div className="chat-item-content" >
                {msg}
              </div>
          </div>
      );
  };
  
  export default ChatItem;
