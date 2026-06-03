import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const a = useRef(0)
  
  useEffect(() => {
      a.current = a.current + 1
      console.log(`rendering and the value of a is ${a.current}..`)
     });
  return (
    <>
    <p>Count is {count}</p>
     <button onClick={() =>{setCount(count+1)}}>Update</button>
    </>
  )
}

export default App