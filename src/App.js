import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch('http://wcs-support.byethost22.com/session/index')
      .then(res => res.json())
      .then(data => setSessions(data));
  }, []);

  return (
    <div className="App">
      {
        sessions.map((sess) => (
          <p key={sess.id}>{sess.title}</p>
        ))
      }
    </div>
  );
}

export default App;
