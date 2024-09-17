import React from 'react'
import styled from 'styled-components'
import { cart } from '../Data'

function Product() {
  return (
  <ProductSection>
    
    <section className='container container_box'> 
     <div className="context">
        <h1>Travel With Product</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero dolorum obcaecati, corrupti soluta harum</p>
        <a href="#">Read More</a>
      </div>
      <div className="image">
        <img src="./public/Product-img1.jpg" alt="" />
      </div>
    </section>
   <section className='container_box'>
      <div className="product_name">
          <h2>Our <span>Products</span></h2>
      </div>
      <div className="cart_product">
      <div className="cards">
        {cart.map((items,value)=>{
          return <div className='box'key={value}>
               <img src={items.img} alt="" />
                <h4>Tasty and Healthy</h4>
                <div className="price">
                    $15.99 <span>$20.99</span>
                </div>
                <div className="btn">
                <a href="#">Add to cart</a>
                </div>
            </div>
})}
      </div>  
      </div>
    </section>
  </ProductSection>
  )
}

export default Product

const ProductSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
.context{
  width:100%;
  padding:0.8rem;
}
.context h1{
 font-size:33px;
 margin-bottom:16px;
}
.context p{
 font-size:12px;
 margin-bottom:14px;
 max-width: 600px;
}
.btn{
  margin-top:16px;
  padding:4px;
  transition:all ease-in-out .6s;
  white-space: nowrap;
  font-size:20px;
}
a{
 border:2px solid orange;
 all: none;
 font-size:20px;
 color:white;
 list-style-type: none;
 text-decoration: none;
 background-color: orange;
 padding: 6px;
 margin-top: 18px;
 border-radius:4px;
}
.container{
  display:flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.product_name{
  text-align: center;
  font-size:25px;
  color:orange;
  padding:18px;
}
.product_name span{
  color:red;
}
.product_name:hover{
  transform: scaleX(1.1);
  transition: all ease-in-out 0.60s;
}
.cards{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap:1.5rem;
}
 .box{
    padding: 1rem;
    text-align: center;
    border: 0.2rem solid #ffc107;
    transition: 0.5s ease-in-out;
}
.box img{
    /* width:130px; */
    object-fit: cover;
    height: 8rem;
    width:5rem;
    border-radius: 50%;
}
h4{
  font-size:22px;
}
.price{
  font-size:16px;
  color: orange;
  margin-top: 12px;
}
.price span{
  text-decoration: line-through;
}
.btn:hover{
  transform: scaleX(1.1);
  transition:all ease-in-out .6s;
}
/* .cart_product{
  padding:20px;
} */
@media(max-width:1024px){
  .image img{
     display:none;
  }
  .context{
    width:100%;
    max-width:500px;
  }
}
`