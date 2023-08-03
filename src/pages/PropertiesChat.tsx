import React, { useContext, useEffect, createContext, useState, ReactNode } from 'react'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import ChatList from '../components/ChatList';
import ChatContent from '../components/ChatContent';
import Properties from '../components/Properties';
import '../styles/propertiesChat.css'
import { ChatContextProvider } from '../context/ChatContext';


const PropertiesChat = () => {
    const authContext = useContext(UserContext);
  const {
    isAuth
  } = authContext!;

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate("/login");
  //   }
  // }, [isAuth,navigate]);

    
  return (
    <div className="main-chat-body">
      <ChatContextProvider>
        <ChatList />
        <ChatContent />
        <Properties />
      </ChatContextProvider>
    </div>
  )
}

export default PropertiesChat