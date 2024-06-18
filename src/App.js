//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function haldleClick(){
    setCounter(counter+1);
  }

  return (
    <>
      <center>
        <h1>Counter : {counter} </h1>
        <button onClick={haldleClick}>Click Me</button>
      </center>
      {/*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/}
    </>
    
  );
}

export default App;
