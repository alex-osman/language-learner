import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from './Chat';
import Vocabulary from '../components/Vocabulary';
import "./Main.styles.scss"

const Main: React.FC = () => {
  return (
    <div className="main-layout">
      <div className='sidebar'>
        <Vocabulary />
        <Sidebar />
      </div>
      <div className="main-content">
        <Chat />
      </div>
    </div>
  );
};

export default Main;
