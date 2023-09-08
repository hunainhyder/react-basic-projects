import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  let handleDecrement = () => {
    if (count <= 0) {
      setError(true);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Counter is set to {count}</h1>
      {error ? <div className='danger'><p>Cannot decrement below zero </p><p className='close' onClick={() => setError(false)}>[&times;]</p></div> : ""}
      <br />
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default App
