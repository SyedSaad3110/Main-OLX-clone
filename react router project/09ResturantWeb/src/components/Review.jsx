import React from 'react'
import styled from 'styled-components';
import { review, secreview } from '../Data';

function Review() {
  return (
    <ReviewSection>
    <section className='review' id='review'>
    <div className="about_text">
   <h1 className='heading'>Customer's <span>review</span></h1>
   </div>

     <div className="box_container">
        {review.map((items, index)=>{
          return  <div className="box" key={index}>
            <img src={items.img} alt=""/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, culpa voluptatum tempora nobis magnam similique suscipit beatae modi numquam commodi.</p>
            {secreview.map((items,index)=>{
                return <div className="image" key={index}>
                      <img src={items.img} alt="" />
                      <div className="name">
                        <h3>Jon Doe</h3>
                      </div>
                      <div className="stars">
                        <a href="#"><i class="fa-solid fa-star"></i></a>
        <a href="#"><i class="fa-solid fa-star"></i></a>
        <a href="#"><i class="fa-solid fa-star"></i></a>
        <a href="#"><i class="fa-solid fa-star"></i></a>
        <a href="#"><i class="fa-solid fa-star"></i></a>
                       </div>
                  </div>
                
            })}
            </div>
        })}
     </div>

    </section>
    </ReviewSection>
  )
}

export default Review

const ReviewSection = styled.section`
.box img{
    height:9rem;
}
.image img{
border-radius: 50%;
}
.name{
  color:#fff;
      font-size:1.5rem;
      margin-top:1rem;
}
`