import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from './Chat';
import Vocabulary from '../components/Vocabulary';

const Main: React.FC = () => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-content">
        <Chat />
        <Vocabulary />
      </div>
    </div>
  );
};

export default Main;
