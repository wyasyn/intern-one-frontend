interface ChatMessage {
  sender: 'user' | 'bot'
  text: string
}
export const sampleChatHistory: ChatMessage[] = [
  {
    sender: 'bot',
    text: '👋 Hey! Welcome to Sneakers. Need help finding sneakers or tracking an order? Just ask!'
  }
]
