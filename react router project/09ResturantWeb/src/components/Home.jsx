import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
   <HomeSection>
    <section className='home' id='home'>
        <div className="content">
            <h2>Fresh <span>Food in the </span>Morning</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, non!</p>
            <a href="#" className="btn">Get yours now</a>
        </div>
    </section>
   </HomeSection>
  )
}

export default Home

const HomeSection = styled.main`
    .home{
        min-height:100vh;
        display: flex;
        align-items: center;
        background:linear-gradient(90deg, rgba(0,0,0 /90%), rgba(68,68,68 / 90%));
        background-image:url("./public/home-section-img.jpg");
        background-size:cover;
        background-repeat:no-repeat;
        background-position:center;
        width:100%;
    }
    .home span{
        color:#d6a40c;
        text-transform: uppercase;
    }
    .home .content h2{
        font-size: 4rem;
        font-weight: 700;
        line-height: 1.8;
        padding: 1rem 0;
        color: #eee;
    }
    .home .content p{
        font-size: 2rem;
        font-weight: lighter;
        line-height: 1.8;
        padding: 1rem 0;
        color: #eee;
    }
    .btn{
        margin-top:10px;
    }

`