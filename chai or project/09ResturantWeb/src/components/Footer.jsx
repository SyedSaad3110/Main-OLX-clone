import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterSection >
    <section className='footer'>
       <div className="icons">
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-facebook-messenger"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-github"></i></a>
       </div>
       <div className="link">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#products">Products</a>
        <a href="#review">Review</a>
        <a href="#contact">Contacts</a>
        <a href="#blogs">Blogs</a>
       </div>
       <div className="created">
        <h3>Created By <span>Saad Bukhari </span>All Rights Reserved</h3>
       </div>
    </section>


    </FooterSection>
  )
}

export default Footer

const FooterSection = styled.div`
   .footer{
    width:100%;
    background-color: #13131a;
   }

    .icons{
       display:flex; 
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap:wrap;
        padding:1rem;
       
    }
    .icons a{
        width:40px;
        height:40px;
        border:0.2rem solid #ffc107;
        border-radius: 50%;
        display:flex; 
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
        transition:0.5s ease-in-out;
    }
    .icons i{
        color: #fff;
        font-size:2rem;
    }
    .icons a:hover{
        transform: scaleY(1.03);
        background-color: #443300;
    }
    .link{
        display:flex; 
        flex-direction: row;
        justify-content: center;
        flex-wrap:wrap;
        align-items: center;
        padding:4rem 3rem;
        gap:2rem;
    }
    .link a{
        
        border:0.2rem solid #ffc107;
        display:flex; 
        align-items: center;
        justify-content: center;
        transition:0.5s ease-in-out;
        padding:0.8rem;
        color: #fff;
        font-size:2rem;
    }
    .created h3{
        color: #fff;
        font-size:2rem;
        font-weight:500;
        text-align:center;
    }
    .created span{
        color:#ffc107;
    }
    .link a:hover{
    transform: scaleY(1.03);
    background-color: #443300;
}
   

`