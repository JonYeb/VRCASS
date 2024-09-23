import React from 'react';
import { Persistence, usePersistence } from './customHooks/Persistence';
import { createRoot } from 'react-dom/client';

function App() {
  const { ready } = usePersistence();
  return (
    <div>
      <Persistence>
        {ready && (
          <>
            <h1>💖 Hello World!</h1>
            <p>Welcome to your Electron application.</p>
          </>
        )}
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
