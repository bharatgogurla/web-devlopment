import { useState, useCallback } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [adjective, setadjective] = useState("good")

  // const getAdjective = () =>{
  //   return "another" + count
  // }

  const getAdjective = useCallback(()=>{
    return "another" + count
  },[])

  return (
    <>
      <Navbar adjective={"good"} getAdjective={getAdjective}/>
      <button onClick={()=>{setCount(count+1)}}>Update {count} </button>
    </>
  )
}

export default App
