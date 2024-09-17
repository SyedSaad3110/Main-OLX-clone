import React from 'react'
import styled from 'styled-components'
import { product } from '../Data'

function Product() {
  return (
    <ProductSection>
    <section className='product' id='products'>
    <div className="about_text">
   <h1 className='heading'><span>Products </span>us</h1>
   </div>
   <div className="box_container">
    {product.map((items,index)=>{
    return <div className="box" key={index}>
        <div className="icons" key={index}>
          <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
          <a href="#"><i class="fa-solid fa-heart"></i></a>
          <a href="#"><i class="fa-solid fa-eye"></i></a>
        </div>
        <div className="img_content">
          <img src={items.img} alt="" />
        </div>
        <div className="content">
          <h3>Fresh Ice-cream</h3>
        <div className="stars">
        <a href="#"><i class="fa-solid fa-star"></i></a>
        <a href="#"><i class="fa-solid fa-star"></i></a>
        <a href="#"><i class="fa-solid fa-star"></i></a>
        <a href="#"><i class="fa-solid fa-star-half-stroke"></i></a>
        </div>
        </div>
        <div className="price">
          $15.99 <span>$20.99</span>
        </div>
      </div>
    })}
   </div>
    </section>
    </ProductSection>
  )
}

export default Product

const ProductSection = styled.section`
.img_content  img{
  height:15rem;
  border-radius: 50%;
}
.box_container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap:1.5rem;
}
    .box_container .box{
      text-align:center;
      border: 0.2rem solid #ffc107 ;
      padding: 2rem;
    }
    .icons{
      padding:3rem;
    }
    .box_container .box .icons a{
      height:5rem;
      width:5rem;
      line-height:5rem;
      font-size:2rem;
      border:0.2rem solid #ffc107 ;
      color:#fff;
      margin:0.3rem;
      padding:1rem;
    }
    .box_container .box .icons a:hover{
      background-color: #ffc107;
    }
    .content h3{
      color:#fff;
      font-size:2.5rem;
      margin-top:1rem;
    }
    .content .stars{
      padding: 1.5rem;
    }
     .stars a i{
      color: #ffc107;
      font-size:1.7rem;
      margin-right:0.7rem;
    }
    .price{
    font-size:2.5rem;
    color:#fff;
    padding: 0.5rem;
}
 .price span{
    font-size:1.5rem;
    text-decoration: line-through;
    font-weight: lighter;
}
`


