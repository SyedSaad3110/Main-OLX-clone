import React from 'react'
import styled from 'styled-components'
import { menu } from '../Data'

function Menu() {
  return (
    <MenuSection>
      <section className="menu" id='menu'>
      <div className="menu_text">
      <h1 className='heading'><span>Our </span>Menu</h1>
      </div>
      <div className="box_container">
        {menu.map((items,index)=>{
            return <div className="box" key={index}> 
                <img src={items.img} alt="" />
                <h4>Tasty and Healthy</h4>
                <div className="price">
                    $15.99 <span>$20.99</span>
                </div>
                <a href="#" className="btn">Add to cart</a>
            </div>
        })}
      </div>
      </section>
    </MenuSection>
  )
}

export default Menu
const MenuSection = styled.section`
.menu_text{
    padding:3rem;
}
.menu{
    font-size: 4rem;
    color:white;
    text-align: center;
    padding: 0 2rem;
}
.menu span{
    color:white;
}
.menu h1{
    color:#d6a40c;
}
img{
    /* width:130px; */
    object-fit: cover;
    height: 10rem;
    width:10rem;
    border-radius: 50%;
}
.box_container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap:1.5rem;
}
.box_container .box{
    padding:5rem;
    text-align: center;
    border: 0.2rem solid #ffc107;
    transition: 0.5s ease-in-out;
}
.box h4{
    font-size:2rem;
    color: #fff;
    padding:1rem 0
}
.box .price{
    font-size:2.5rem;
    color:#fff;
    padding: 0.5rem;
}
.box .price span{
    font-size:1.5rem;
    text-decoration: line-through;
    font-weight: lighter;
}
.box:hover{
    transform: scaleY(1.03);
    background-color: #443300;
}
`