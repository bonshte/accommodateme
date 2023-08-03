import React, { useContext, useEffect, useRef, useState } from 'react'
import '../styles/chatContent.css'
import ChatItem from './ChatItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ChatContext, ChatMessage, ChatSession } from '../context/ChatContext';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const BASE_CHAT_URL = "api/chat-properties";
const ChatContent = () => {

  const authContext = useContext(UserContext);
  const {
    isAuth
  } = authContext!;

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate("/login");
  //   }
  // }, [isAuth,navigate]);

  const chatContext = useContext(ChatContext);


  const {
    
    currentMessages,
    setCurrentMessages,
    currentChatSession,
    setCurrentChatSession
  } = chatContext!;

  const chatEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current !== null) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentMessages]);

  const [msg, setMsg] = useState(""); 

const handleSend = async () => {
  if (msg.trim() === "") return;

  const newMessage: ChatMessage = {
    fromUser: true,
    message: msg,
  };
  setMsg("");
  setCurrentMessages((prevMessages) => [...prevMessages, newMessage]);

  setIsLoading(true);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  try {
    const response = await axios.post(
      `api/chat-properties/${userId}/${currentChatSession?.sessionId}`,
      JSON.stringify(msg),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    );

    const responseMessage: ChatMessage = {
      fromUser: false,
      message: response.data.message,
    };

    setCurrentMessages((prevMessages) => [...prevMessages, responseMessage]);
    setIsLoading(false);
    if (currentChatSession?.sessionId === 0) {
      const newChatSession: ChatSession = {
        description: response.data.message,
        sessionId: response.data.sessionId,
      };
      setCurrentChatSession(newChatSession);
      console.log(newChatSession);
  }
    
  } catch (err) {
    console.error(err);
  }
}

  return (
    <div className="main-chat-content">
      <div className="chat-content-body">

        {currentMessages.map((itm, index) => {
          return (
            <ChatItem
              key={index}
              isTyping={false}
              fromUser={itm.fromUser}
              msg={itm.message}
            />
          );
        })}
        {isLoading && <ChatItem fromUser={false} msg={". . ."} isTyping={true} />}
        <div ref={chatEndRef} />

      </div>
      <div className="chat-content-footer">
        <div className="send-new-message">
          <input
            type="text"
            value={msg}
            placeholder="Type a message here"
            onChange={(e) => {
              setMsg(e.target.value)
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                handleSend();
              }
            }}
          />
          <button
            placeholder="type a message here"
            className="btn-send-msg" id="sendMsgBtn"
            onClick={handleSend}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatContent;
