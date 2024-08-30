import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [ color, setColor] = useState("olive")
  return (
  
    <div className="w-full h-screen duration-200" id='box' style={{backgroundColor:color}}>
      <div className="container">
        <div className="btn-range">
      <button onClick={()=>{
            setColor("red")
          }
         } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' id='btn-box' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>{
            setColor("yellow")
          }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'id='btn-box' style={{backgroundColor:"yellow"}}>yellow</button>
          <button onClick={()=>{
            setColor("purple")
          }
         } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' id='btn-box' style={{backgroundColor:"purple"}}>purple</button>
          <button onClick={()=>{
            setColor("blue")
          }
         } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' id='btn-box' style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={()=>{
            setColor("orange")
          }
         } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' id='btn-box' style={{backgroundColor:"orange"}}>orange</button>
          <button onClick={()=>{
            setColor("silver")
          }
         } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' id='btn-box' style={{backgroundColor:"silver"}}>silver</button>
          <button onClick={()=>{
            setColor("black")
          }
         } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' id='btn-box' style={{backgroundColor:"black"}}>black</button>
          <button onClick={()=>{
            setColor("pink")
          }
         } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' id='btn-box' style={{backgroundColor:"pink"}}>pink</button>
          <button onClick={()=>{
            setColor("brown")
          }
         } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' id='btn-box' style={{backgroundColor:"brown"}}>brown</button>
      </div>
        </div>
        </div>
  )
}

export default App
