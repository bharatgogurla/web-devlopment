import { useState, useMemo } from 'react'
import './App.css'


const nums = new Array(30_000_000).fill(0).map((_, i) =>{
    return {
      index: i,
      isMagical: i===29_000_000
    }
  })

function App() {
  const [count, setCount] = useState(0)
  const [numbers, setnumbers] = useState(nums)

  // const magical = numbers.find(item=>item.isMagical===true) //Expensive computation
  const magical = useMemo(() => numbers.find(item=>item.isMagical===true),[numbers])
  return (
    <>
      <span>Magical number is {magical.index}</span>
      <button onClick={()=> {
        setCount(count+1)
        if (count == 10){
          setnumbers(new Array(30_000_000).fill(0).map((_, i) =>{
              return {
                index: i,
                isMagical: i===9_000_000
    }
  }))
        }
      }}>
          Count is {count} 
        </button>
    </>
  )
}

export default App
