import React, { createContext, useState, ReactNode } from 'react';

export interface ChatMessage {
    fromUser: boolean;
    message: string;
}
  
export interface ChatSession {
    description: string;
    chatId: number;
}
  
interface ChatContextProps {
    currentMessages: ChatMessage[];
    setCurrentMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
    chatSessions: ChatSession[];
    setChatSessions: React.Dispatch<React.SetStateAction<ChatSession[]>>;
    currentMessage: string;
    setCurrentMessage: React.Dispatch<React.SetStateAction<string>>;
    currentChatSession: ChatSession | null;
    setCurrentChatSession: React.Dispatch<React.SetStateAction<ChatSession | null>>;
}
  

  
interface ChatContextProviderProps {
    children: ReactNode;
}
  
export const ChatContextProvider: React.FC<ChatContextProviderProps> = ({ children }) => {
    const [currentMessages, setCurrentMessages] = useState<ChatMessage[]>([]);
    const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const [currentChatSession, setCurrentChatSession] = useState<ChatSession | null>(null);
  
    const value: ChatContextProps = {
      currentMessages,
      setCurrentMessages,
      chatSessions,
      setChatSessions,
      currentMessage,
      setCurrentMessage,
      currentChatSession,
      setCurrentChatSession,
    };
  
    return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
  
export const ChatContext = createContext<ChatContextProps | null>(null);