
import './App.css';
//  import Abouts from './components/Abouts';
import Navbar from './components/Navbar'
 import React, {useState} from 'react'
import Form from './components/Form'
function App() {
  const [mode, setMode]=useState('light');
  const toggleMode =()=>{
    if(mode === "light"){
      // is ko yad rakhna ha setMode constant ha not variabnle is k under equal k sign nhi lgna v.v.v.v.v.rem
setMode("dark"); 
document.body.style.background='gray'; 

    }
    else{
      // is ko yad rakhna ha setMode constant ha not variabnle is k under equal k sign nhi lgna v.v.v.v.v.rem
      setMode("light");
document.body.style.background='white'; 
    }
  }
  // const [darkMode, setDarkMode] = useState(false);

  return (
    
   <>
<Navbar title="textutils" mode={mode} toggleMode={toggleMode} abouts="about us" />
<div className="container">
<Form heading="ya saad na bhni ha" mode={mode}/>
{/* <Abouts/> */}
</div>
</>
  )
}

export default App;
