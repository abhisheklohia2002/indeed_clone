import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signin from '../pages/Sign-in'
import FindPage from '../pages/FindPage'
import JobSeeker from '../pages/JobSeeker'



export default function AllRoute() {
  return (
 <>
 <Routes>
    <Route path ="/" element ={<Home/>} />
    <Route path = "/sign" element = {<Signin/>} />
    <Route path='/hiring' element = {<FindPage/>} />
    <Route path = "/jobseeker" element = {<JobSeeker/>} />
 </Routes>
 </>
  )
}