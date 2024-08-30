import React from 'react'
import styled from 'styled-components'
// import { useState } from 'react';

function RoleDice({rollDice , currentDice}) {
  // const [currentDice , setCurrentDice] = useState(1);

  //   const generateRandomNumber = (min, max)=>{
  //   return Math.floor(Math.random() * (max - min) + min);
  // };
  
  // const rollDice = ()=>{
  //   const randomNum = generateRandomNumber(1,7);
  //   setCurrentDice((prev) => randomNum )
  // }


  return (
    <DiceContainer>
      <div className='dice_img' onClick={ rollDice }>
        <img src={`/images/dice/dice${currentDice}.jpg`} alt="dice1" />
        <p>Click On Dice</p>
      </div>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;
  flex:1;
  p{
    font-weight:800;
    margin-top:6px
  }
  .dice_img img{
    border-radius:20px;
    height: 100px;
    width:100px;
    cursor:pointer;
  }


`

























































































// chat gpt k ha ya code

// import React, { useState } from "react";

// function DiceGame() {
//   const [selectedNumber, setSelectedNumber] = useState(null);
//   const [diceNumber, setDiceNumber] = useState(null);
//   const [error, setError] = useState("");

//   const rollDice = () => {
//     if (selectedNumber === null) {
//       setError("Please select a number before rolling the dice.");
//       return;
//     }

//     setError(""); // Clear previous error
//     const randomNum = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
//     setDiceNumber(randomNum);
//   };

//   const handleNumberClick = (number) => {
//     setSelectedNumber(number);
//     setError(""); // Clear error when a number is selected
//   };

//   return (
//     <div>
//       <h1>Dice Game</h1>
//       <div>
//         <h2>Select a Number:</h2>
//         <div style={{ display: "flex", gap: "10px" }}>
//           {[1, 2, 3, 4, 5, 6].map((number) => (
//             <button
//               key={number}
//               onClick={() => handleNumberClick(number)}
//               style={{
//                 padding: "10px",
//                 border: selectedNumber === number ? "2px solid blue" : "1px solid gray",
//                 backgroundColor: selectedNumber === number ? "#e0e0e0" : "white",
//               }}
//             >
//               {number}
//             </button>
//           ))}
//         </div>
//       </div>

//       <button onClick={rollDice} style={{ marginTop: "20px", padding: "10px" }}>
//         Roll Dice
//       </button>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {diceNumber !== null && (
//         <div style={{ marginTop: "20px" }}>
//           <h2>Dice Rolled: {diceNumber}</h2>
//           <p>
//             {selectedNumber === diceNumber
//               ? "Congratulations! You guessed it right."
//               : "Try again!"}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DiceGame;