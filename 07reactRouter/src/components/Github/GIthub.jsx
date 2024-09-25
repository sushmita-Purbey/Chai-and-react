
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GIthub() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
        
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      GIthub followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={200} height={100}/>
    </div> 
  )
}

export default GIthub

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
     // eslint-disable-next-line no-unused-vars
     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
     return response.json()

}