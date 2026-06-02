import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx' 


function App() { 
  const [count, setCount] = useState(0);
  const [first, setFirst] = useState(0);
  const [color, setColor] = useState(0);

   useEffect(() =>{
    alert("Color was changed!")
    setColor(color + 1)
  },[count])

  return (
    <>
     <Navbar color={"navy " + "blue" + color}/>
     <p>Count number is {count}</p>
     <button onClick={()=>{setCount(count+1)}}>Update</button>
    </>
  )
}

export default App
