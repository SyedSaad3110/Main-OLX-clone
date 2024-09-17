import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Categories from './components/Categories'
import Main from './components/Main'
import MainCards from './components/MainCards'
import Footer from './components/Footer'
import Layout from './Layout';
import InnerCards from './components/InnerCards';
function App() {

  const router = createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:(
          <>
          <Categories/>
          <Main/>
          <MainCards/>
          <Footer/>
          </>
        ),
      },
      {
        path:"/viewMore",
        element:<InnerCards/>
      },
      {
        path:"/viewMore",
        element:<InnerCards/>
      }
    ]

  }])
  return (
   <>
   {/* <Navbar/> */}
   {/* <Categories/>
   <Main/>
   <MainCards/>
   <Footer/> */}
   <RouterProvider router={router}/>
  
   </>
  )
}

export default App