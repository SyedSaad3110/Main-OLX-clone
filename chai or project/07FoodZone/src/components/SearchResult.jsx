import React from 'react'
import styled from 'styled-components'
import { BASE_URL } from './../App';

function SearchResult({data}) {
  return (

<FoodContainers>
     <FoodSection>
 
     <FoodCards>
    {data?.map((food)=>{
        <FoodContent key={food.name}>
            {/* <div className="food_img">
                <img src={BASE_URL + food.text} alt="food" />
            </div> */}
            {food.text}
            
        </FoodContent>
    })}
   
   </FoodCards>

     </FoodSection>
    </FoodContainers>













  )
}

export default SearchResult

const FoodCards = styled.div`

`
const FoodContent = styled.div`
    

`

const FoodContainers = styled.section`
background-image:url("/bg.png");
background-size:cover;
height:calc(100vh - 250px);
`
const FoodSection = styled.div`
  
`