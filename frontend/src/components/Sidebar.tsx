import React, { useEffect } from 'react';
import { getConversations } from '../services/api';

const Sidebar: React.FC = () => {
  const [conversations, setConversations] = React.useState<
    { id: number; title: string }[]
  >([]);

  useEffect(() => {
    console.log('use effect happens twice?');
    const fetchConversations = async () => {
      try {
        const result = await getConversations();
        console.log(result.data);
        setConversations(result.data);
      } catch (error) {
        console.error('Failed to fetch conversations', error);
      }
    };
    fetchConversations();
  }, []);

  return (
    <div>
      <h2>Conversations</h2>
      <ul>
        {conversations.map(
          (conversation: { id: number; title: string }, index: number) => (
            <li key={conversation.id}>
              {index + 1}) {conversation.title}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
