import React, { useState } from 'react';
import { sendMessage } from '../services/api';

const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState<{ text: string; isUser: boolean }[]>([]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setConversation([...conversation, { text: message, isUser: true }]);
    try {
      const result = await sendMessage({ message });
      console.log(result)
      setConversation([...conversation, { text: message, isUser: true }, { text: result.data.message, isUser: false }]);
    } catch (error) {
      console.error('Failed to send message', error);
    }
    setMessage('');
  };

  return (
    <div className="chat">
      <div className="messages">
        {conversation.map((msg, index) => (
          <div key={index} className={`message ${msg.isUser ? 'user' : 'bot'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
