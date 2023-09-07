import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  let handleDecrement = () => {
    if (count <= 0) {
      setError("Cannot decrement below zero");
    } else {
      setError("");
      setCount(count - 1);
    }
  }
  
  return (
    <>
      <h1>Counter is set to {count}</h1>
      {error}
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default App
