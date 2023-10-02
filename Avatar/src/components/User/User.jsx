import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid}=useParams()
  return (
    
    <>
    <h1 className='bg-gray-600 text-white text-center text-3xl'>User: {userid}</h1>
    </>
  )
}

export default User