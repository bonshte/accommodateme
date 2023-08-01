import React, { useContext, useEffect, useRef, useState } from 'react'
import '../styles/chatContent.css'
import ChatItem from './ChatItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ChatContext, ChatMessage } from '../context/ChatContext';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const BASE_CHAT_URL = "api/properties-chat";
const chat = [
  {
    fromUser: false,
    message: "Hi Tim, How are you?",
  },
  {
    fromUser: true,
    message: "I am fine.This is supposed to be a very large message just to check if everything is okay.And since i don't know if it is large emough we continue till here",
  },
  {
    fromUser: false,
    message: "What about you?",
  },
  {
    fromUser: true,
    message: "I am fine.This is supposed to be a very large message just to check if everything is okay.And since i don't know if it is large emough we continue till here",
  },
  {
    fromUser: false,
    message: "What about you?",
  },
  {
    fromUser: true,
    message: "I am fine.This is supposed to be a very large message just to check if everything is okay.And since i don't know if it is large emough we continue till here",
  },
  {
    fromUser: false,
    message: "What about you?",
  },
  {
    fromUser: true,
    message: "I am fine.This is supposed to be a very large message just to check if everything is okay.And since i don't know if it is large emough we continue till here",
  },
  {
    fromUser: false,
    message: "What about you?",
  },
  {
    fromUser: true,
    message: "I am fine.This is supposed to be a very large message just to check if everything is okay.And since i don't know if it is large emough we continue till here",
  },
  {
    fromUser: false,
    message: "What about you?",
  },
  {
    fromUser: true,
    message: "Awesome these days.",
  },
  {
    fromUser: false,
    message: "Finally. Whats the plan?",
  },
  {
    fromUser: true,
    message: "what plan mate?",
  },
  {
    fromUser: false,
    message: "I'm taliking about the tutorial",
  },
];
const ChatContent = () => {
  
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

  const chatContext = useContext(ChatContext);
  useEffect(() => {
    const fetchChats = async () => {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      const fetchPoint = `${BASE_CHAT_URL}/${userId}`;
      try {
        const response = await axios.get(fetchPoint, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        chatContext?.setChatSessions(response.data);
      } catch(error) {
        console.log(error);
      }
    }
    if (isAuth) {
    fetchChats();
    }
  },[]);

  const {
    currentMessages,
    setCurrentMessages,
    currentMessage,
    setCurrentMessage
  } = chatContext!;

  const chatEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current !== null) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentMessages]); // add this useEffect


  const handleSend = () => {
    const newMessage: ChatMessage = {
      fromUser: true,
      message: currentMessage,
    };
    const updatedMessages = [...currentMessages, newMessage];
    setCurrentMessages(updatedMessages);
    setCurrentMessage("");
  }
  

 
 
    useEffect(() => {
      setCurrentMessages(chat);
    },[chat]);


  const [msg, setMsg] = useState("");
  return (
    <div className="main-chat-content">
        <div className="chat-content-body">
          
            {currentMessages.map((itm, index) => {
              return (
                <ChatItem
                  key={index}
                  fromUser={itm.fromUser}
                  msg={itm.message}
                />
              );
            })}
            <div ref={chatEndRef} /> 
          
        </div>
        <div className="chat-content-footer">
          <div className="send-new-message">
            <input
              type="text"
              value={currentMessage}
              placeholder="Type a message here"
              onChange={(e) => {
                setCurrentMessage(e.target.value)
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
