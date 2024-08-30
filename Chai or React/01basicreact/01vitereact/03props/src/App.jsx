import { useState } from 'react'
import ReactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username:"saad",
    age:21
  }
  let newArr = [1,2,3]

  return (
    <>
    <h1 className='bg-green-400 p-4 round mb-4'>Tailwind test</h1>
    <Card username="chai or code" btnText="click me"/>
    <Card username="saad"/>
    </>
  )
}

export default App
