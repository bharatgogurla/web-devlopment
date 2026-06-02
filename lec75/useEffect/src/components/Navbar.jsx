import React, {useEffect} from 'react'

const Navbar = ({color}) => {  

   // Case 1: Run on every render 
  useEffect(() => {
    alert("Hey, I will run on every render!")
  })

  // Case 2: Run only on first render 
  useEffect(() => {
    alert("Hey, I run only on first render")
  },[])

  // Case 3: Run only when certain values change
  useEffect(() => {
    alert("Hey, I run only when certain values change")
  }, [color])

  return (
    <div>
        I am navabar of {color} hehe..
    </div>
  )
}

export default Navbar