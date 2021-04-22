import { useState } from 'react'
import NewMessageForm from './NewMessageForm'
import MessagesList from './MessagesList'

const App = () => {
  const [messages, setMessages] = useState([])

  const handleSend = newMessage => {
    setMessages([newMessage, ...messages])
  }

  return (
    <div>
      <NewMessageForm onSend={handleSend} />
      <MessagesList messages={messages} />
    </div>
  )
}

export default App
