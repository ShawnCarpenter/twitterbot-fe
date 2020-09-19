import React from 'react';
import './App.css';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Twitter Mashup</h1>
      </header>
      <Form />
      <a href="https://twitter.com/prescookietrump">
      <div className="twitterLink"/>
      </a>
    </div>
  );
}

export default App;
