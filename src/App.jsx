import { useState, useEffect } from 'react'
import './App.css'

import fibonacci from './util/fibonacci'

function App() {

  function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

  const [fibonacciNumbers, setFibonacciNumbers] = useState(fibonacci(100));
  const [randomIndex, setRandomIndex] = useState(0);
  const [color, setColor] = useState(random_rgba());
  
  
  const generateRandomIndex = (numOfNumbers) => {
    return Math.floor(Math.random() * numOfNumbers);
}
  
  const handleGenerateClick = () => {
    setRandomIndex(generateRandomIndex(100));
    setColor(random_rgba());
  }

  useEffect(() => {
    document.body.style.backgroundColor = `${color}`;
  }, [color]);

  return (
    <div className="App" style={{
      backgroundColor: {color}
    }}>
      <h1>Random Fibonacci Number</h1>
      <h2>{fibonacciNumbers[randomIndex].toLocaleString()}</h2>
      <p>This is the {randomIndex + 1}. Fibonacci number.</p>
      <button onClick={handleGenerateClick}>Generate New</button>
    </div>
  )
}

export default App
