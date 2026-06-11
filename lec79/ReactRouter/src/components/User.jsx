import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const params = useParams()
  return (
    <div>Hey, I am {params.username}</div>
  )
}

export default User