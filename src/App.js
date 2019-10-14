import React from 'react';
import TodoList from './TodoList';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <TodoList />
      </main>
    </div>
  );
}

export default App;
