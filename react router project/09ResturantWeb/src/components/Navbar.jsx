import React , {useRef}from 'react'
import styled from 'styled-components';
import { cart } from '../Data'

function Navabar() {
    const searchRef = useRef();
    const cartRef = useRef();
    const navbarRef = useRef();

   const navbarHandler = ()=>{
    navbarRef.current.classList.toggle("active")
    cartRef.current.classList.remove("active")
    searchRef.current.classList.remove("active")
   }


    const cartHandler = ()=>{
          cartRef.current.classList.toggle("active");
          searchRef.current.classList.remove("active");
          navbarRef.current.classList.remove("active");
    }
    
    const searchHandler = ()=>{
        searchRef.current.classList.toggle("active");
        navbarRef.current.classList.remove("active");
        cartRef.current.classList.remove("active");
    }
  return (
    <HeaderContainer>
       <section>
       <header className="header">
           <div className="logo">
           <a href="#">
                <h1>Res<span className='clr_val'>T</span><span className='clr_val'>U</span><span className='clr_val'>R</span>ant</h1>
            </a>
           </div>
            <div className='navbar' ref={navbarRef}>
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#menu">menu</a>
                <a href="#products">products</a>
                <a href="#review">review</a>
                <a href="#contact">contact</a>
                <a href="#blogs">blogs</a>
            </div>
            <div className="icons">
            <i className="fa-solid fa-magnifying-glass  search" onClick={searchHandler}></i>
            <i className="fa-solid fa-cart-shopping shoping" onClick={cartHandler}></i>
            <i id='menu_btn' className="fa-solid fa-bars" onClick={navbarHandler}></i>
            </div>
            <div className='search_form' ref={searchRef}>
                <input type="search" placeholder='Search here...' />
                <label htmlFor="search_box" className='search' ><i className="fa-solid fa-magnifying-glass  search"></i></label>
            </div>
            <div className="items_container" ref={cartRef}>

            {cart.map((item, index) => (
  <div className="cart_item" key={index}>
    <span>
      <i className="fa-solid fa-xmark cross_icon"></i>
    </span>
    <img className='img_section' src={item.img} alt=""/>
    <div className="content">
        <h3>Cart Item 1</h3>
        <div className="price">$15.99</div>
    </div>
  </div>
))}
<div className="btn">
<a href="#">Checkout now</a>
</div>

            </div>
        </header>
       </section>
    </HeaderContainer>

  )
}

export default Navabar

const HeaderContainer = styled.nav`
 .header{
    background-color: #010103;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 7%;
  border-bottom:0.2rem solid #ffc107 ;
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  
 }
.logo,
.search,
.shoping,
.bar{
    color:white;
}
.logo, 
.logo h1{
    font-size: 3rem;
    color:white

}
.clr_val{
    color:red;
}
.navbar a{
    margin:0 1rem;
    font-size:1.6rem;
    color:#fff;
}
.navbar a:hover{
    color:#ffc107;
    border-bottom:0.1rem solid #ffc107;
    padding-bottom:0.5rem;
}
.icons{
    color:#fff;
    cursor: pointer;
    font-size:2.5rem;
    margin-left:2rem;
    display:flex;
    gap: 18px;
    white-space: nowrap;
}
.icons i:hover{
    color:#ffc107;
}
#menu_btn{
    display:none
}
.search_form{
    position:absolute;
    top:115%;
    right: 9.5%;
    background-color:#fff;
    width: 50rem;
    height:5rem;
    display: flex;
    align-items:center;
    transform:scaleY(0);
    transform-origin:top ;
    border:0.2 #ffc107 solid;
    border-radius: 2px;

}
.search_form input{
    height:100%;
    width: 100%;
    font-size:1.6rem;
    padding:1rem;
    text-decoration:none;
   
}
.search_form label i{
    cursor: pointer;
    font-size:2.2rem;
    margin-right:1.5rem;
    color:#13131a;
}
.search_form label i:hover{
    color:#ffc107;
}
.search_form.active{
    transform: scaleY(1);
}
.items_container{
    position: absolute;
    top: 100%;
    right: -100%;
    height: calc(100vh - 5rem);
    width: 35rem;
    background:#fff;
    padding:0 1.5rem;
}
.items_container.active{
    right: 0%;
    transition:0.5s linear ease-in-out
}
.cart_item{
    position: relative;
    margin:2rem 0;
    display: flex;
    align-items: center;
    gap: 1.5rem;
}
.cart_item .cross_icon{
    position:absolute;
    top:1rem;
    right: 3rem;
    font-size: 2rem;
    cursor: pointer;
    color:#13131a;
}
.cross_icon:hover{
    color:#ffc107;
}
.img_section{
   width:55px;
   /* height: 7rem; */
}
.content h3{
    font-size: 1.5rem;
    color:#13131a;
    padding-bottom:0.5rem
}
.content .price{
    font-size: 1.2rem;
    font-weight:400;
    color:#ffc107;
}
.btn{
    width:100%;
    text-align:center;
    font-size:1.7rem;
    border:2px solid #ffc107;
    padding: 6px;
    background-color: #ffc107;
    cursor: pointer;

}
.btn a{
    text-decoration:none;
    color:white;
    transition:0.5s linear ease;
}

@media(max-width:1024px){
.navbar a{
display:block;
text-align:center;
margin-top:3rem;

}
#menu_btn{
display:block;
}

.navbar{
position:absolute;
top:110%;
right:-100%;
background:#000;
width:30rem;
height:calc(100vh - 6rem);
}
.navbar.active{
right:0;
}
}
@media(max-width:700px){
    .search_form{
        width: 27rem;
        height:4.1rem;
    }
}


`

/* =============================== */
