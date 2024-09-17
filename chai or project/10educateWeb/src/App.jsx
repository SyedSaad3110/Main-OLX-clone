// import { useState } from 'react'
import Header from './components/common/Header';
import './App.css'
import {
  BrowserRouter as Router,
  // Switch
} from "react-router-dom";

function App() {

  return (
    <>
     
     <Router>
     <Header/>
     {/* <Switch>
          <Route path="/about">
            <About />
          </Route> 
        </Switch>*/}
     </Router>
    </>
  )
}

export default App