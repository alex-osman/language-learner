import React, { useState } from 'react';
import { sendMessage } from '../services/api';

const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const result = await sendMessage({ message });
      console.log(result)
      setResponse(result.data.message);
    } catch (error) {
      console.error('Failed to send message', error);
    }
  };

  return (
    <div>
      <h2>Chat Section</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Message</label>
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit">Send</button>
      </form>
      <div>
        <h3>Response</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Chat;
