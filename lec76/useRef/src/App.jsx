import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const btnref = useRef(0)
  
  useEffect(() => {
      console.log(`First rendering`)
      btnref.current.style.backgroundColor = "red"
     });

  return (
    <>
    <p>Count is {count}</p>
     <button ref={btnref} onClick={() =>{setCount(count+1)}}>Update</button>
     <button onClick={() => {btnref.current.style.display = "none"}}>Change me</button>
    </>
  )
}

export default App