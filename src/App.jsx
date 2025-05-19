import { useState } from 'react'
import React from 'react'
import { FaPlus, FaMinus, FaSyncAlt } from "react-icons/fa";
import './App.css'

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
   <div className="counter-container">
      <h1>Counter</h1>
      <div className="counter-controls">
        <p className="counter-button" onClick={() => setCount(count + 1)}>
          <FaPlus />
        </p>
        <p className="counter-value">{count}</p>
        <p className="counter-button" onClick={() => setCount(count - 1)}>
          <FaMinus />
        </p>
      </div>
      <button className="reset-button" onClick={() => setCount(0)}>
       <FaSyncAlt /> Reset
      </button>
    </div>
    </>
  )
}

export default App;
