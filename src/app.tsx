import React from 'react';
import { createRoot } from 'react-dom/client';
import SetAndRetrieveAuth from './components/atoms/SetAndRetriveAuth';

function App() {
  return (
    <div>
      <h1>💖 Hello World!</h1>
      <p>Welcome to your Electron application.</p>
      <SetAndRetrieveAuth />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
