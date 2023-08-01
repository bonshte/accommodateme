import React from 'react'
import '../styles/chatList.css'
type ChatListItemsProps = {
    topic: string;
    id: number
};

const ChatListItem: React.FC<ChatListItemsProps> = ({topic, id}) => {
    return (
     <div className="chat-list-item">
        <h3>{topic}</h3>
     </div> 
    )
};

export default ChatListItem;