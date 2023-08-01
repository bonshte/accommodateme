import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEllipsis, faSearch, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import axios from '../api/axios';
import '../images/logo.jpg'
import { useState, useEffect } from 'react';
import ChatListItem from './ChatListItem';
import ChatContent from './ChatContent';
import { ChatContext } from '../context/ChatContext';
const ChatList = () => {

    const chatContext = useContext(ChatContext);
    const chatSessions = [
        {   
            id: 1,
            topic: "nice apartment in Vitosha nice apartment in Vitosha nice apartment in Vitosha nice apartment in Vitosha nice apartment in Vitosha"
        },
        {
            id: 2,
            topic: "nice apartment in Vitosha"
        },
        {
            id: 3,
            topic: "nice apartment in Vitosha"
        },
        {
            id: 4,
            topic: "nice apartment in Vitosha"
        },
        {
            id: 5,
            topic: "nice apartment in Vitosha"
        },
        {
            id: 6,
            topic: "nice apartment in Vitosha"
        },
        {
            id: 7,
            topic: "nice apartment in Vitosha"
        },
        {
            id: 8,
            topic: "nice apartment in Vitosha"
        },
        {
            id: 9,
            topic: "nice apartment in Vitosha"
        },
        {
            id: 10,
            topic: "nice apartment in Vitosha"
        },
        {
          id: 11,
          topic: "nice apartment in Vitosha"
      },
      {
        id: 12,
        topic: "nice apartment in Vitosha"
    },{   
      id: 13,
      topic: "nice apartment in Vitosha nice apartment in Vitosha nice apartment in Vitosha nice apartment in Vitosha nice apartment in Vitosha"
  },
  {
      id: 14,
      topic: "nice apartment in Vitosha"
  },
  {
      id: 15,
      topic: "nice apartment in Vitosha"
  },
  {
      id: 16,
      topic: "nice apartment in Vitosha"
  },
  {
      id: 17,
      topic: "nice apartment in Vitosha"
  },
  {
      id: 18,
      topic: "nice apartment in Vitosha"
  },
  {
      id: 19,
      topic: "nice apartment in Vitosha"
  },
  {
      id: 20,
      topic: "nice apartment in Vitosha"
  },
  {
      id: 21,
      topic: "nice apartment in Vitosha"
  },
  {
      id: 23,
      topic: "nice apartment in Vitosha"
  },
  {
    id: 24,
    topic: "nice apartment in Vitosha"
},
{
  id: 25,
  topic: "nice apartment in Vitosha"
}
      ];

    // useEffect(() => {
    //   const fetchChats = async () => {
    //     try {
    //       const response = await axios.get('YOUR_API_ENDPOINT');
    //       setAllChats(response.data);
    //     } catch (error) {
    //       console.error('Failed to fetch chats', error);
    //     }
    //   };
    //   fetchChats();
    // }, []);
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
            {chatSessions.map((item, index) => (
              <ChatListItem
                topic={item.topic}
                key={item.id}
                id={item.id}
              />
            ))} 
          </div>
        </div>
      );
}
export default ChatList;