 import styled from "styled-components"
 
 
 export const Button = styled.button`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    padding : 10px 18px;
    gap: 10px;
    min-width: 220px;
    background: black;
    border-radius: 5px;
    color:white;
    border: none;
    font-size: 16px;
    transition: 0.5s  ease-in-out;

    cursor: pointer;

    &:hover{
        background-color:white;
        border:1px solid black;
        color:black;
        transition: 0.5s ease-in-out;
    }
`
export const OutlineBtn = styled(Button)`
background-color:white;
border:1px solid black;
color:black;
 &:hover{
        background-color:black;
        border:1px solid transparent;
        color:white;
    }
`