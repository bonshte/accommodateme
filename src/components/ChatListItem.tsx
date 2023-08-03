import React, { useContext } from 'react'
import '../styles/chatList.css'
import { ChatContext } from '../context/ChatContext';
import axios from '../api/axios';
type ChatListItemsProps = {
    topic: string;
    id: number
};

const ChatListItem: React.FC<ChatListItemsProps> = ({topic, id}) => {
    const chatContext = useContext(ChatContext);
    const {
        currentChatSession,
        setCurrentChatSession,
        setCurrentMessages
     } = chatContext!;


    const fetchChatHistory = async () => {
        console.log("begin fetch chat history", currentChatSession?.sessionId);
        if (currentChatSession?.sessionId === id) {
            return;
        }
        console.log("fetching history")
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
    
        try {
            const response = await axios.get(`api/properties-chat/${userId}/${id}`, {
                headers: { 
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }, 
            });
            const messageHistory = response.data.messageHistory;
            
            
            setCurrentChatSession(
                {
                    sessionId: id,
                    description: topic
                }
            );
            setCurrentMessages(messageHistory);
            console.log("end fetch chat history", currentChatSession?.sessionId);
        } catch (error) {
            console.error('Failed to fetch chat session', error);
        }
    };

    return (
     <div className="chat-list-item" onClick={fetchChatHistory} >
        <h3>{topic}</h3>
     </div> 
    )
};

export default ChatListItem;