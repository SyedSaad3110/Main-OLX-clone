import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useRef } from 'react'

function Navbar() {

  const barRef = useRef();


  const navbarHandler = () =>{
     barRef.current.classList.toggle("active")
  }

  const handelRemove = (e)=>{
      return e.isActive ? barRef.current.classList.remove("active") : barRef.current.classList.toggle("active")
  }
  return (
    <NavbarSection>
     <section>
        <header className="header">
        <div className="logo">
            <h3>Z<span>OO</span>N</h3>
        </div>
        <div className="nav" ref={barRef} >
            <NavLink onClick={handelRemove} className={(e)=>{ return e.isActive ? "orange" : "" }} to="/">Home</NavLink>
            <NavLink onClick={handelRemove} className={(e)=>{ return e.isActive ? "orange" : "" }} to="/product">Product</NavLink>
            <NavLink onClick={handelRemove} className={(e)=>{ return e.isActive ? "orange" : "" }} to="/about">About</NavLink>
            <NavLink onClick={handelRemove} className={(e)=>{ return e.isActive ? "orange" : "" }} to="/contact">Contact</NavLink>
        </div>
        <div className="icons">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i id='navbar' class="fa-solid fa-bars" onClick={navbarHandler}></i>
        </div>
        {/* <div className="navbar_container" ref={barRef}>

        </div> */}
        </header>
       
     </section>
    </NavbarSection>
  )
}

export default Navbar

const NavbarSection = styled.main`
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top:0;
    left:0;
    right: 0;
    z-index:1000;
    background-color: black;
    padding:16px 30px;
}
.orange{
  color:orange;
}
 @media(max-width:1024px){
  .nav{
position:absolute;
top:100%;
right:-500px;
background:#000;
width:20rem;
height:calc(100vh - 6rem);
display:block;
transition: all ease-in-out 0.6s;
}
.nav.active{
  right:0;
}
.nav a{
  display:block;
  text-align:center;
  align-items: center;
  margin-top:50px;
  border:none;
} 
.nav a:hover{
  transform: scaleX(1.1)
}
 }
`