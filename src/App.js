import React, { useState } from 'react';
import { Message } from './Message';
import './App.css';

function App() {
  let [count, setCount] = useState(1);
  let [isMor, setMor] = useState(false);

  return (
    <div className={`box ${isMor ? 'dayLight' : ''}`}>
      <h1>Good {isMor ? 'Morning' : 'Night'}</h1>
      <Message counter={count} />
      <br />
      <button onClick={() => setCount(++count)}>Update Counter</button>
      <br />
      <button onClick={() => setMor(!isMor)}>
        {isMor ? 'Night Mode' : 'Day Mode'}
      </button>
    </div>
  );
}

export default App;
