import React from 'react'
import styled from 'styled-components';

function GoogleMap() {
  return (
    <GogleSection>
    <div>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509171!2d144.95565101531654!3d-37.81732797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f16d1749f4a8!2sFederation+Square!5e0!3m2!1sen!2sau!4v1614065364568!5m2!1sen!2sau"
        width="530"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        object-fit="cover"
        display="flex"
        flex-wrap="wrap"
        align-item="center"
        text-align="center"
      ></iframe>
    </div>
    </GogleSection>
  )
}

export default GoogleMap

const GogleSection = styled.main`
 @media(max-width:850px){
  iframe{
    width:400px;
    height:380px;
  }
}
@media(max-width:660px){
  iframe{
    width:350px;
    height:340px;
  }
} 
 @media(max-width:567px){
  iframe{
    width:330px;
    height:300px;
    margin-right:3rem;
  }
}
@media(max-width:516px){
  iframe{
    width:300px;
    height:270px;
    margin-left:1rem;
  }
}
@media(max-width:476px){
  iframe{
    width:270px;
    height:250px;
  }
} 
`
