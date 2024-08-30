// import React, { useState } from 'react';
import styled from 'styled-components';

function NumberSelector({ setError , error , selectedNumber,setSelectedNumber}) {
    const arrNumber = [1,2,3,4,5,6];
    // const [selectedNumber, setSelectedNumber] = useState("");

 const numberSelectorHandler = (value)=>{
  setSelectedNumber(value);
  setError("")
 }



    console.log(selectedNumber);
  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
       <div className="flex">
       {
       arrNumber.map((value, i)=>{
         return  <Box
         isSelected = {value == selectedNumber}
         onClick={()=>{
            return    numberSelectorHandler(value)
         }}key={i}>{value}</Box>
})};
          {/* <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
          <Box>4</Box>
          <Box>5</Box>
          <Box>6</Box> */}
       </div>
       <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
 display:flex;
    flex-direction:column;
    align-items:start;
    margin-top:20px;
.flex{
    display: flex;
    gap:24px;

}
p{
    font-size:24px;
    font-weight:700;
}
    .error{
    color:red;
    font-size:18px;
    }
`

const Box = styled.div`
height:72px;
width:72px;
border:1px solid black;
display:grid;
place-items:center;
font-size:24px;
font-weight:700;
cursor: pointer;
background-color: ${(props) => {
    return props.isSelected ? "black" : "white"
}};
color: ${(props) => {
    return !props.isSelected ? "black" : "white"
}};
`
