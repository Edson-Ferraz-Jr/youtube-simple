import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { InterfaceStorage } from './contexts/interfaceContext';
import { UserStorage } from './contexts/userContext';
import { VideosStorage } from './contexts/videosContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <InterfaceStorage>
    <UserStorage>
    <VideosStorage>
      
      <React.StrictMode>
        <App />
      </React.StrictMode>
      
    </VideosStorage>
    </UserStorage>
    </InterfaceStorage>
);
