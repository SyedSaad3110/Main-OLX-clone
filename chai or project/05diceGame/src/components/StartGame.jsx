import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'

function StartGame({toggle}) {
  return (
    <Container>
    <div>
     <img src="/images/header-img.jpg" alt="dice" />
     </div>
     <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
     </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    height: 100vh;
    margin:0 auto;
    align-items: center;

    .content h1{
        font-size:96px;
        white-space: nowrap;
    }
`
// const Button = styled.button`
//     display: flex;
//     flex-direction:column;
//     justify-content:center;
//     align-items: center;
//     padding : 10px 18px;
//     gap: 10px;
//     min-width: 220px;
//     background: black;
//     border-radius: 5px;
//     color:white;
//     border: none;
//     font-size: 16px;
//     transition: 0.5s  ease-in-out;

//     cursor: pointer;

//     &:hover{
//         background-color:white;
//         border:1px solid black;
//         color:black;
//         transition: 0.5s ease-in-out;
//     }
    
// `