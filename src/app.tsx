import React from 'react';
import { createRoot } from 'react-dom/client';
import { Link, Routes, Route, HashRouter } from 'react-router-dom';
import LoginPage from './components/organism/LoginPage';
import SideMenu from './components/organism/SideMenu';

function App() {
  return (
    <>
      <Link to={`/`}>Start</Link>
      <Link to={`login`}>Your Name</Link>
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <SideMenu />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
