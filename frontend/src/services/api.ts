import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4200/api',
});

export const sendMessage = async (messageData: { message: string }) => {
  return await api.post('/chat/send', messageData);
};
