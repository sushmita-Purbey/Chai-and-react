
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
  const{userid} = useParams()
  return (
   
    <div className='bg-gray-600 text-center text-white text-3xl p-2'>
      
      User: {userid}
    </div>
  )
}

export default User
