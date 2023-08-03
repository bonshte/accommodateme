import React, { createContext, useState, ReactNode } from 'react';

export interface ChatMessage {
    fromUser: boolean;
    message: string;
}
  
export interface ChatSession {
    description: string;
    sessionId: number;
}
  
interface ChatContextProps {
    currentMessages: ChatMessage[];
    setCurrentMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
    chatSessions: ChatSession[];
    setChatSessions: React.Dispatch<React.SetStateAction<ChatSession[]>>;
    currentChatSession: ChatSession | null;
    setCurrentChatSession: React.Dispatch<React.SetStateAction<ChatSession | null>>;
}
  

  
interface ChatContextProviderProps {
    children: ReactNode;
}
  
export const ChatContextProvider: React.FC<ChatContextProviderProps> = ({ children }) => {
    const [currentMessages, setCurrentMessages] = useState<ChatMessage[]>([]);
    const defaultChatSession = { sessionId: 0, description: 'New Chat' };
    const [currentChatSession, setCurrentChatSession] = useState<ChatSession | null>(defaultChatSession);
    const [chatSessions, setChatSessions] = useState<ChatSession[]>([defaultChatSession]);
  
    const value: ChatContextProps = {
      currentMessages,
      setCurrentMessages,
      chatSessions,
      setChatSessions,
      currentChatSession,
      setCurrentChatSession,
    };
  
    return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
  
export const ChatContext = createContext<ChatContextProps | null>(null);