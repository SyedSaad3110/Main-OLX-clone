import React, { useState } from 'react';
import styles from './ContactForm.module.css'
import Button from '../button/Button';
import { MdMessage } from 'react-icons/md';
import { MdCall } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

function ContactForm() {
  const [name, setName] = useState("saad");
  const [email, setEmail] = useState("support saad bukhari");
  const [text, setText] = useState("welcome");
  // let name = "saadbukhari"
  // let email = "saadbukhari@gmail.com"
  // let text = "sub ko my page"

 const onSubmit = (event)=>{
   event.preventDefault();

   setName(event.target[0].value)
   setEmail(event.target[1].value);
   setText(event.target[2].value);

   console.log({
    name,
    email,
    text
   })
 }




  return (
    <div>
      <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_button}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={24}/>}/>
          <Button text="VIA CALL" icon={<MdCall fontSize={24} />}/>
          </div>
          <Button isOutLine={true} text="VIA EMAIL FORM" icon={< HiOutlineMail fontSize={24} />}/>

          <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text"  name='name'/>
          </div>

          <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="Email"  name='email'/>
          </div>

          <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
          <textarea name='text' rows={8} className={styles.text_btn}/>
          </div>
         <div className={styles.end_btn}>
         <div className={styles.submit_btn}>
          <Button text="Submit Button"/>
          </div>
         </div>
          <div>{name + " " + email + " " + text}</div>
          
        </form>
        </div>

        <div className={styles.contact_img}>
          <img src="/images/hero-img.jpg" alt="hero img"></img>

        </div>
      </section>
    </div>
  )
}

export default ContactForm
