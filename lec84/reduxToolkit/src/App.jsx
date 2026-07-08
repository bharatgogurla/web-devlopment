import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './components/Navbar'
import './App.css'
import { decrement, increment, incrementByAmount, multiply } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar />
    <div>
     <button onClick={() => dispatch(decrement())}>-</button>
     currently count is {count}
     <button onClick={() => dispatch(increment())}>+</button>
     <button onClick={() => dispatch(multiply())}>*</button>
     <button onClick={() => dispatch(incrementByAmount(6))}>+</button>
    </div>
    </>
  )
}

export default App
