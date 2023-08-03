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
      currentChatSession,
      setCurrentChatSession
    } = chatContext!;
   

    useEffect(() => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      
      const fetchChatSessions = async () => {
        console.log("fetching sessions");
        try {
          const response = await axios.get(`api/chat-properties/${userId}`, {
            headers: { 
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });
          const mappedSessions = response.data.chatSessions.map((session: any) => ({
            description: session.description,
            sessionId: session.sessionId, 
          }));
          
          const newChatSession = {
            description: 'New Chat',
            sessionId: 0,
          };
          mappedSessions.unshift(newChatSession);
          
          setChatSessions(mappedSessions);
          setCurrentChatSession(newChatSession);
          
        } catch (error) {
          console.error('Failed to fetch chat properties', error);
        }
      };
    
      fetchChatSessions();
    }, []);


    return (
        <div className="main-chat-list">
          <button className="btn">
            <span>New conversation</span>
          </button>
          <div className="chat-list-heading">
            <h2>Chats</h2>
            <button className="btn-nobg">
              <FontAwesomeIcon icon={faEllipsis} />
              
            </button>
          </div>
          <div className="chat-list-search">
            <div className="search-wrap">
              <input type="text" placeholder="Search Here" required />
              <button className="search-btn">
                  <FontAwesomeIcon icon={faSearch} />
                
              </button>
            </div>
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