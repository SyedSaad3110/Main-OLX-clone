import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")


  // ref hook

  const passwordRef = useRef(null)


  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@$^$|~%#*{}()"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPass = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(Password)
  }, [Password]);

  useEffect(() => {
    PasswordGenerator()
  }, [length, numberAllowed, charAllowed, PasswordGenerator])

  return (
    <>
      <div className='w-full  max-w-md mx-auto shadow-md text-center rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>Password Generator
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={Password}
            className='outline-none w-full py-1 px-3'
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPass} className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }} />
            <label>Length :{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              // defaultChecked={numberAllowed} 
              id='numberinput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }} />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              // defaultChecked={charAllowed} 
              id='charinput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }} />
            <label>Charater</label>
          </div>
        </div>
      </div>

    </>
  )
}


export default App