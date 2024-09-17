// import { Routes, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import About from './components/About';
import Content from './components/Content';
import Footer from './components/Footer'
import User from './components/User';
function App() {
const router = createBrowserRouter([
  {
    path:'/',
    element:<><Navbar /><About/></>
  },
  {
    path:'/about',
    element:<><Navbar /><Content/></>
  },
  {
    path:'/content',
    element:<><Navbar /><Footer/></>
  },
  {
    path:'/user/:username',
    element:<><Navbar /><User/></>
  },


])

  return (
    <>
     
     <RouterProvider router={router}/>
    </>
  )
}

export default App
