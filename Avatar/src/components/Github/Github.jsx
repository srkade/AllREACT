import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data,setdata]=useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/srkade").then(Response=>Response.json()).then(data=>{
    //         console.log(data.followers)
    //         setdata(data)
    //     })
    // }, [])

    const data=useLoaderData()
    
  return (
    <div className='p-5 bg-orange-500 text-center text-2xl '>
        <h1  >Github Followers {data.followers} </h1>
        <img src={data.avatar_url} alt="" />
    </div>

  )
}

export default Github

export const GithubLoaderData= async ()=>{
    const  response=await fetch("https://api.github.com/users/srkade")
    return response.json()
}