import React from 'react'
import { Navigate, Link } from 'react-router-dom'
import { Data } from './Data'

export const Home = ({user}) => {
  if(!user){
     return(
        <Navigate to='/login' replace/>
     )
  }

  return (
    <div>
        <h1>Welcome back</h1>
        <Data/>
    </div>
  )
}
