
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <div style={{ color: 'white', backgroundColor: '#121212', height: '100vh', padding: '2rem' }}>
    <h1>Welcome to the Movie Recommendation System 🎬</h1>
    <p>Dark Mode UI inspired by Letterboxd</p>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
