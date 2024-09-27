import React from 'react';
import { Persistence } from './customHooks/Persistence';
import { createRoot } from 'react-dom/client';
import FetchWorldButton from './components/atoms/FetchWorldButton';
import SetAndRetrieveAuth from './components/atoms/SetAndRetriveAuth';

function App() {
  return (
    <div>
      <Persistence>
        <h1>💖 Hello World!</h1>
        <p>Welcome to your Electron application.</p>
        <SetAndRetrieveAuth />
      </Persistence>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
