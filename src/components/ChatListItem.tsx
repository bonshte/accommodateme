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
    console.log("id is",id);
    const {
        currentChatSession,
        setCurrentChatSession,
        setCurrentMessages
     } = chatContext!;

    const fetchChatHistory = async () => {
        if (currentChatSession?.sessionId === id) {
            return;
        }
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
    
        try {
            const response = await axios.get(`api/chat-properties/${userId}/${id}`, {
                headers: { 
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }, 
            });
            

            const mappedMessages = response.data.messageHistory.map((msg: any) => ({
                fromUser: msg.fromUser,
                message: msg.translatedMessage,  
              }));
    
            setCurrentChatSession(response.data.chatSession);
            setCurrentMessages(mappedMessages);
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