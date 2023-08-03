import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEllipsis, faSearch, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import axios from '../api/axios';
import '../images/logo.jpg'
import { useState, useEffect } from 'react';
import ChatListItem from './ChatListItem';
import { ChatContext } from '../context/ChatContext';
const ChatList = () => {

    const chatContext = useContext(ChatContext);
    const {
      chatSessions,
      setChatSessions,
      setCurrentChatSession,
      setCurrentMessages,
      currentChatSession
    } = chatContext!;

    const createNewChatSession = () => {
      console.log("begin createNewChatSession", currentChatSession?.sessionId);
      
      if (currentChatSession?.sessionId === 0) {
        return;
      }
      const newChatSession = {
        sessionId: 0,
        description: 'New Chat'
      };
      setCurrentChatSession(newChatSession);
      console.log("end createNewChatSession", currentChatSession?.sessionId);
      setCurrentMessages([]);
    };
   
    useEffect(() => {
      console.log("begin fetch chat sessions", currentChatSession?.sessionId);
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      
      const fetchChatSessions = async () => {
        try {
          const response = await axios.get(`api/properties-chat/${userId}`, {
            headers: { 
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });
          const mappedSessions = response.data.chatSessions;
          
          setChatSessions(mappedSessions);
        } catch (error) {
          console.error('Failed to fetch chat properties', error);
        }
      };
    
      fetchChatSessions();
      console.log("end fetch chat sessions", currentChatSession?.sessionId);
    }, []);


    return (
        <div className="main-chat-list">
          <button 
          className="btn"
          onClick={createNewChatSession}
          >
            <span>New conversation</span>
          </button>
          <div className="chat-list-heading">
            <h2>Chats</h2>
            <button className="btn-nobg">
              <FontAwesomeIcon icon={faEllipsis} />
              
            </button>
          </div>
          <div className="chat-list-items">
            {Array.isArray(chatSessions) && chatSessions.map((item, index) => (
              <ChatListItem
                topic={item.description}
                key={index}
                id={item.sessionId}
              />
            ))} 
          </div>
        </div>
      );
}
export default ChatList;