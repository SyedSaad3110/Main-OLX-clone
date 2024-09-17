import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <HomeSection>
      <div className="container_box">
       
       </div>
    </HomeSection>

    )
}

export default Home

const HomeSection = styled.div`
.container_box{
  background-image:url('./public/home-img2.jpg');
  height: calc(100vh - 70px);
  background-position:center;
  background-size: cover;
  background-repeat:none;
  background-attachment:fixed

}

`
