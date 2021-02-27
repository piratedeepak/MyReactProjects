import React, { useState } from "react";
import "./App.css";
// never change the state directly # developer-talk

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header>
        <h1>Counter app using State</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset Counter
      </button>
      <button
        onClick={() => {
          count === 15 ? alert("Cant Increase more") : setCount(count + 1);
        }}
      >
        {" "}
        Increase Counter
      </button>
      <button
        onClick={() => {
          count === 0 ? alert("cant decrease more") : setCount(count - 1);
        }}
      >
        Decrease Counter
      </button>
    </div>
  );
};

export default App;
