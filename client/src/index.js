import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  useEffect(() => {
    fetch("https://movie-backend-jzuy.onrender.com/")
      .then(res => res.json())
      .then(data => {
        console.log("Backend says:", data);
      })
      .catch(err => {
        console.error("API error:", err);
      });
  }, []);

  return (
    <div style={{ color: 'white', backgroundColor: '#121212', height: '100vh', padding: '2rem' }}>
      <h1>🎬 Movie Recommendation System</h1>
      <p>Backend is connected ✅ (check the browser console)</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);