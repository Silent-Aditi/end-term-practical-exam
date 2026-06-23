import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkEvenOdd = () => {
    if (number === "") {
      setResult("Please enter a number.");
      return;
    }

    if (Number(number) % 2 === 0) {
      setResult(`${number} is an Even Number.`);
    } else {
      setResult(`${number} is an Odd Number.`);
    }
  };

  return (
    <div className="container">
      <h1>Even & Odd Number Checker</h1>

      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={checkEvenOdd}>Check</button>

      <h2>{result}</h2>
    </div>
  );
}

export default App;