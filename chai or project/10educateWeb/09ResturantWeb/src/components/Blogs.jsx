import React from 'react';
import styled from 'styled-components';
import { blogs } from '../Data';

function Blogs() {
  return (
    <BlogsSection>
    <section className="blogs" id="blogs">
    <div className="about_text">
   <h1 className='heading'>Blogs <span>us</span></h1>
   </div>
   <div className="box_container">
        {blogs.map((items,index)=>{
            return <div className="box" key={index}> 
               <div className="image">
               <img src={items.img} alt="" />
               </div>
               <div className="content">
                <a href="#" className="tittle">
                    Tasty and refreshing spices
                </a>
               <div className="span_tag">
               <span>by admin / 31st Augest, 2024</span>
               </div>
               </div>
               <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, facilis.
               </p>
             <div className="btn_section">
             <a href="" className="btn">Read More</a>
             </div>
                </div>
        })}
      </div>
    </section>
    </BlogsSection>
    
  )
}

export default Blogs

const BlogsSection = styled.section`
.box{
    transition:0.5s ease-in-out;
}
    .image{
        height: 25rem;
        width:100%;
        overflow:hidden;
    }
    .image img{
        height: 100%;
        width:100%;
        overflow-x:hidden;
    }
  .box:hover .image img{
    transform:scale(1.2);
  }
  .content{
    margin-top:1rem;
    padding: 2rem;
    
  }
  .content .tittle{
    font-size: 2.5rem;
    color:#fff;
    line-height: 1.2;
    display: flex;
  }
  .content .tittle:hover{
    color:#ffc107;
  }
  .span_tag{
    margin-top:0.5rem;
    /* align-items: flex-start; */
  }
  .span_tag span{
    color:#ffc107;
    display: flex;
    /* align-items: flex-start; */
    /* padding: 0.5rem; */
    font-size:2rem;
    margin-top:0.9rem;

  }
  p{
    font-size:1.6rem;
    line-height: 1.3;
    color: #ccc;
    /* padding: 1rem 0; */
  }
  .btn_section{
    margin-top:0.9rem;
  }

`