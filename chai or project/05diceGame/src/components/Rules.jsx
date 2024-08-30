import React from 'react'
import styled from 'styled-components'

function Rules() {
  return (
   <RulesContainer>
   <ul>
    <h2>How to play dice game</h2>
    <div className="text">
        <p>Select any Number</p>
        <p>Click on Dice</p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sit quia, quidem nesciunt fugiat laborum quas dolore similique voluptatem commodi sint provident, et eligendi reprehenderit porro explicabo esse voluptates officiis! </p>
          <p>If you get wrong guess then 2 point will be dedcuted</p>
    </div>
   </ul>
   </RulesContainer>
    
  )
}

export default Rules

const RulesContainer = styled.div`
background-color:#fbf1f1;
padding:20px;
max-width:800px;
margin:0 auto;
margin-top:40px;
border-radius:10px;
h2{
  font-size:22px;
}
.text{
  margin-top:24px;

}
`