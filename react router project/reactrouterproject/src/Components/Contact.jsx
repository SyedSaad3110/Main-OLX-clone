import React from 'react'
import styled from 'styled-components'

function Contact() {

    const submit = (event)=>{
       event.preventDefault()
    }
  return (
   <ContactSection>
  <section>
  <div className="contact">
    <h1>Contact <span> Us</span></h1>
   </div>
     <div className="btn_section">
     <div className="btn1">
    <button className='btn'><i class="fa-solid fa-message"></i>  SUPPORT</button>
    </div>
    <div className="btn2">
  <button className='btn'> <i class="fa-solid fa-phone"></i> VIA CALL</button>
  </div>
     </div>
     <div className="container">
        <div className="form_section">
        <form action=''>
          <div className="form_control">
          <label htmlFor="name">Name</label>
          <input type="text"  name='name'/>
          </div>

          <div className="form_control">
          <label htmlFor="email">Email</label>
          <input type="Email"  name='email'/>
          </div>
          <div className="form_control">
          <label htmlFor="text">Text</label>
          <textarea name='text' rows={4} className="text_btn"/>
          </div>
         <div className="submit_btn">
         <button className='end_btn' onClick={submit}> Submit</button>
          </div> 
        </form>
          </div>
          {/* <div className="right_section">
        <img src="./public/contact-img1.jpg" alt="" />
    </div> */}
          </div>
         
  </section>
   </ContactSection>
  )
}

export default Contact

const ContactSection = styled.div`
section{

}
.form_section{
    width:100%;
    max-width:400px;
    margin-top:12px;
}
.btn1{
    max-width:200px;
}
.content{
    display:flex;
    align-items: center;
    justify-content: center;
    gap:70px;
}
.contact{
    display:flex;
    align-items: center;
    justify-content: center;
    padding:22px;
    margin-top: 32px;
}
.contact h1{
    font-size:40px;
    font-weight: 700;
    color:orange;
}
.btn_section{
    display:flex;
    align-items:center;
    justify-content: center;
    gap:24px;
}
.btn{
    padding:9px 12px;
    background-color:black;
    color:white;
    overflow: hidden;
    white-space: nowrap;
}
i{
    color:white;
    margin-right:8px;
}
.container{
    padding:20px 20px;
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    flex-wrap:wrap;
} 
 form{
    display: flex;
    flex-direction: column;
    gap: 32px;
    width:100%;
}
.form_control{
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
}
.form_control input{
    height: 35px;
    padding: 4px 8px;
    font-size: 16px;
    max-width:400px;
    width:100%;
}
.form_control label{
   position: absolute;
   top: -12px;
   left: 14px;
   background-color: white;
   padding: 0 10;
   font-size: 16px;
}
.contact_form form{
    display: flex;
    flex-direction: column;
    gap: 32px;
    width:100%;
   
}
.text_btn{
    resize: none;
    width: 100%;
}
textarea{
    padding: 6px 8px;
    font-size: 16px;
    max-width:400px;
    width:100%;
}
.end_btn{
    display: flex;
    justify-content: flex-end;
    margin-top: -4px;
    padding:4px 14px;
    color:white;
    background-color:black;
}
.text_btn{
    resize: none;
    width: 100%;

}
    .form_control input:focus ~ label {
  transform: scaleY(1.1);
  transition: transform 0.3s ease;
}
`