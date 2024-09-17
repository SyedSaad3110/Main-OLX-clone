import React from 'react'
import styled from 'styled-components'
import GoogleMap from './GoogleMap'

function Contact() {
  return (
   <ContactSection>
    <section className="contact" id="contact">
    <div className="about_text">
   <h1 className='heading'><span>Contact </span>us</h1>
   </div>
    <div className="container">
    <div className="google_map">
     <GoogleMap/>
     </div>
     <div className="contact_section">
        <form action="">
            <h3>Get in Touch</h3>
            <div className="input_box">
            <i class="fa-solid fa-user"></i>
            <input type="text" placeholder='Name' />
            </div>

            <div className="input_box">
            <i class="fa-solid fa-envelope"></i>
            <input type="email" placeholder='Email' />
            </div>

            <div className="input_box">
            <i class="fa-solid fa-phone"></i>
            <input type="number" placeholder='Number' />
            </div>
            <input type="submit" value="contact now" className='btn' />
        </form>
     </div>
    </div>
    </section>
   </ContactSection>
  )
}

export default Contact

const ContactSection = styled.section`
     
     .container{
        display:flex;
        /* background-color: #5a5ac7; */
        justify-content: space-evenly;
        align-items:center;
        flex-wrap:wrap;
        gap:1rem;
        padding:0.5rem;
    }
    .contact_section{
        padding:1rem 2rem;
        text-align: center;
    }
    form{
        flex:1 1 45rem;
    }
    form h3{
        text-transform: uppercase;
        color: #fff;
        font-size: 3.5rem;
    }
    .input_box{
        display:flex;
        align-items: center;
        margin-top:2rem;
        margin-bottom: 2rem;
        background-color: #13131a;
        border:0.2rem solid #ffc107
    }
    .input_box{
        padding:0 3rem;
    }
    .input_box i{
        color:#fff;
        font-size:2rem;
        /* padding-left:2rem; */
    }
    .input_box input{
        width:100%;
        padding:2rem;
       font-size:1.7rem;
       color:#fff;
       text-decoration: none;
       background: transparent;
    }
    @media(max-width:700px){
        .container{
        background-color: transparent;
     
    }
    }
`