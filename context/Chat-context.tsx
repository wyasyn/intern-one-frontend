'use client'

import { sampleChatHistory } from '@/constants/sample-chat'
import React, { createContext, useState, useContext, ReactNode } from 'react'

// Define the type for each chat message
interface ChatMessage {
  sender: 'user' | 'bot'
  text: string
}

// Define the shape of our context
interface ChatContextProps {
  message: string
  chatHistory: ChatMessage[]
  loading: boolean
  setMessage: (message: string) => void
  setChatHistory: React.Dispatch<React.SetStateAction<ChatMessage[]>>
  setLoading: (loading: boolean) => void
}

// Create the Chat context with default values
const ChatContext = createContext<ChatContextProps | undefined>(undefined)

// Create a custom hook to use the Chat context
export const useChatContext = (): ChatContextProps => {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider')
  }
  return context
}

// Create the provider component
export const ChatProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [message, setMessage] = useState<string>('')
  const [chatHistory, setChatHistory] =
    useState<ChatMessage[]>(sampleChatHistory)
  const [loading, setLoading] = useState(false)

  return (
    <ChatContext.Provider
      value={{
        message,
        chatHistory,
        loading,
        setMessage,
        setChatHistory,
        setLoading
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}
