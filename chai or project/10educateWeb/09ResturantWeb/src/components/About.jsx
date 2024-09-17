import React from 'react';
import styled from 'styled-components';
import AboutImg from '../assets/images/about.jpg';

function About() {
  return (
   <AboutSection>
    
    <section className='about' id='about'>
   <div className="about_text">
   <h1 className='heading'><span>About </span>us</h1>
   </div>
        <div className="row">
            <div className="left_section">
            <img src={AboutImg }alt="aboutimg" />
            </div>
            <div className="right_section"> 
                <h3>What Makes Our Food Specials?</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quam veritatis distinctio ut! Minus iste deserunt unde quisquam ipsa, culpa velit obcaecati consequatur beatae est magnam, voluptatem vitae cum nulla.</p>
                <a href="#" className='btn'>Learn More</a>
            </div>
        </div>
        </section>
        </AboutSection>
   
  )
}

export default About

const AboutSection = styled.div`
.about .row{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content:space-evenly;
    background-color: black;
    flex-wrap: wrap;
}
.about .row img{
    width:500px;
    
    /* width:100%; */
}
.right_section{
    padding:20px 20px;
    width:100%;
    max-width: 600px;

}
.right_section h3{
    font-size: 3rem;
    color:#fff;
}
.right_section p{
color:#fff;
font-size: 1.6rem;
padding: 1rem 0;
line-height: 1.8;
/* display: flex;
flex-wrap: wrap; */
}
@media(max-width:520px){
    .left_section img{
        display:none;
    }
}

`
