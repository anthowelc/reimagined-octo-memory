const MessagesList = ({ messages }) => {
  return (
    <ul>
      {messages.map(message => (
        <li key={message}>{message}</li>
      ))}
    </ul>
  )
}

export default MessagesList
