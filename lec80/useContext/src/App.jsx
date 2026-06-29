import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { CounterContext } from './context/Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterContext.Provider value={{count, setCount}}>
      <Navbar />
      <button onClick={()=> setCount(count+1)}>Update</button>
      </CounterContext.Provider>
    </>
  )
}

export default App
