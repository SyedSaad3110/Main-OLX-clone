import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'

function Latout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Latout