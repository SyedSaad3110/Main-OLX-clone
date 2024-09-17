
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About';
import Product from './Components/Product';
import Contact from './Components/Contact';
import Latout from './Latout';
import { Component } from 'react';

function App() {

  const router = createBrowserRouter([{
    path:'/',
    element:<Latout/>,
    children:[
      {
      path:"",
      element:<Home/>
    },
    {
      path:"/product",
      element:<Product/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
  ]
  }])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
