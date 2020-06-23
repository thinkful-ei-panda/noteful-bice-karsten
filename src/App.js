import React from 'react';
import Store from './Store';
import './App.css';

function App() {
  const state = { ...Store };
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
