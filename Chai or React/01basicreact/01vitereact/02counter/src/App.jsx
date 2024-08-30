// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'

function App() {

 let [counter, setCounter] = useState(0);

 const addValue = () =>{
  setCounter(counter + 1)
   console.log("click", counter + 1);
   }
   const removeValue = () =>{
    if (counter > 0) {
      setCounter(counter - 1)
    }else{
      setCounter(0)
    }
    console.log("remove click", counter - 1 && counter!=0
    );
    
  
 }
  return (
    <>
     <h1>chai or react</h1>
     <h2>counter value : {counter}</h2>
     <button onClick={addValue}> Add value</button>
     <br/>
     <button onClick={removeValue}>Remove value</button>
     <p>footer</p>
    </>
  )
}

export default App
