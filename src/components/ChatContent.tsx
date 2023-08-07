import React, { useContext, useEffect, useRef, useState } from 'react'
import '../styles/chatContent.css'
import ChatItem from './ChatItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ChatContext, ChatMessage, ChatSession } from '../context/ChatContext';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { Ad } from './Ad';
import { RecommendedAdsContext } from '../context/RecommendedAdsContext';

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
    setCurrentChatSession,
    setChatSessions,
  } = chatContext!;

  const recommendedAdsContext = useContext(RecommendedAdsContext);
  const {
    setRecommendedAds
  } = recommendedAdsContext!;

  const chatEndRef = useRef<null | HTMLDivElement>(null);

  const getRecommendations = async (sessionId: number) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    try {
      const response = await axios.get(
        `api/ad-recommendation/${userId}/${sessionId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("getting recommendations");
      const ads: Ad[] = response.data.recommendedAds;
      console.log(ads);
      setRecommendedAds(ads);
      
    } catch (error) {
      console.error('An error occurred while getting the recommendations:', error);
      return null;
    }
  }

  useEffect(() => {
    if (chatEndRef.current !== null) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentMessages]);

  const [msg, setMsg] = useState("");

  const handleSend = async () => {
    if (msg.trim() === "") {
      return;
    }

    const newMessage: ChatMessage = {
      fromUser: true,
      message: msg,
      sessionId: currentChatSession!.sessionId,
      foundAds: false
    };
    setMsg("");
    const oldMessageHistory = currentMessages;
    setCurrentMessages((prevMessages) => [...prevMessages, newMessage]);

    setIsLoading(true);
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    
    try {
      const response = await axios.post(
        `api/properties-chat/${userId}/${currentChatSession?.sessionId}`,
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
        sessionId: response.data.chatSessionId,
        foundAds: response.data.adsFound
      };
      
      if (currentChatSession?.sessionId === 0) {
        const updatedMessage : ChatMessage = {
          fromUser: true,
          message: newMessage.message,
          sessionId: response.data.chatSessionId,
          foundAds: false
        }
        const updatedMessageHistory = [...oldMessageHistory, newMessage];
        setCurrentMessages(updatedMessageHistory);
        const startedChatSession: ChatSession = {
          sessionId: response.data.chatSessionId,
          description: newMessage.message
        }
        console.log("started chat session",startedChatSession)
        setCurrentChatSession(startedChatSession);
        setChatSessions(prevChatSessions => [startedChatSession, ...prevChatSessions]);
        
      }
      setCurrentMessages((prevMessages) => [...prevMessages, responseMessage]);
      console.log("hello");
      if (response.data.adsFound === true) {
        console.log("yes boy");
        getRecommendations(response.data.chatSessionId);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
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
