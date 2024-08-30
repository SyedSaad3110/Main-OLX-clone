import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled  from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from "react";
import {Button} from '../styled/Button'
import {OutlineBtn} from '../styled/Button'
import Rules from './Rules'

function GamePlay() {
  
  // const [currentDice , roleDice] = useState(1);
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState("");
  const [currentDice , setCurrentDice] = useState(1);
  const [error, setError] = useState('');
  const [showRules, setShowRules] = useState(false);

   const generateRandomNumber = (min, max)=>{
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = ()=>{
    if(!selectedNumber){
      setError("you have not selected Number")
      return null
    }

    

    const randomNum = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNum );
    
if(selectedNumber === randomNum){
  setScore((prev) => prev + randomNum)
  }else{
    setScore((prev) => prev - 1)
  }
// setSelectedNumber(undefined)

  }

  const resetScore = ()=>{
    setScore(0)
  }



  return (
   <MainContainer>
    <div className="top_section">
    <TotalScore score={score} />
   <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
    </div>
    <RoleDice rollDice={rollDice} currentDice={currentDice} />
    <div className="btns">
      <OutlineBtn onClick={resetScore}>Reset</OutlineBtn>
      <Button onClick={()=>{
        setShowRules((prev)=> !prev)
      }}>{
        showRules ? "Hide" : "Show"} Rules</Button>
    { showRules && <Rules/>}
      </div>
   </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
padding-top:70px;
.top_section{
    display:flex;
    justify-content:space-evenly;
    align-items:center;
}
.btns{
  display:flex;
  margin-top: 35px;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  gap:10px;
}
`
