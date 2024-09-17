import React from 'react'
import { bikesCardsSection } from '../Data'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
// import { useRef } from 'react'

function BikeCards({name}) {

  return (
    <BikesSection>
          <div className="card_name">
              <div className="ri">
              <h2>{name}</h2>
              </div>
              <div className="left">
          <NavLink to="/viewMore"  className='a_tag'  >View More</NavLink>
                 <i class="fa-solid fa-angle-right"></i>
          </div>
          </div>
  
          <div className="cards_container">
           {bikesCardsSection.map((items, value)=>{
             return  <div className="box">
                    <div className="images" key={value}>
                      <img src={items.img} alt="" />
                    <div className="prices">
                          <span>{items.price}</span>
                      <i class="fa-regular fa-heart"></i>
                     </div>
  
                     <div className="text_container">
                      <div className="text">
                       {items.text}
                      </div>
                      <div className="country">
                      {items.country}
                      </div>
                      <div className="time">
                      {items.time}
                      </div>
                     </div>
                    
                    </div>
                   
               </div>
            })}
          </div>
      
      
      </    BikesSection>
  )
}

export default BikeCards

const BikesSection = styled.section`
.card_name{
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.ri h2{
    font-size:29px;
    font-weight:700;
    letter-spacing: 0.8px;
}
.left{
    display:flex;
    align-items: center;
    gap:15px;
}
.left a{
    font-size:19px;
    font-weight:500;
}
.left i {
    font-size:19px;
    margin-top: 4px;
    color:blue;
}
.a_tag{
    list-style: none;
    text-decoration: none;
    color:blue;
}
.cards_container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap:1.5rem;
  padding:20px 0;
}
  .cards_container .box{
    text-align:center;
    border: 1px solid #222 ;
    padding: 0px;
  }
.images img {
    width:100%;
    height:210px;
    object-fit: cover;
}
/* .content_container{
    padding:20px;
} */
.prices{
   display:flex;
   align-items:center;
   justify-content:space-between;
   padding-top:20px;
   padding-left:20px;
   padding-right:20px;
}
.prices span {
    font-size:18px;
    font-weight:650;
}
.prices i {
    font-size:24px;
}
.text_container{
    display:flex;
    justify-content: center;
    flex-direction:column;
    text-align:start;
    text-align:flex-start;
}

.text_container .text{
    text-align:start;
    font-size:18px;
    font-weight:420;
    margin-top:12px;
   padding-left:20px;
   padding-right:20px;

}
.text_container .country{
    text-align:start;
    font-size:18px;
    font-weight:400;
    margin-top:14px;
   padding-left:20px;
   padding-right:20px;
}
.text_container .time{
    padding-left:20px;
   padding-right:20px;
   padding-bottom:20px;
}



`