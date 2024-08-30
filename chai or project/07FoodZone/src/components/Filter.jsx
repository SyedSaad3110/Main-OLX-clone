import React from 'react'
import styled from 'styled-components'

function Filter() {
  return (
     <FilterContainer>
     <Button>All</Button>
     <Button>BreakFast</Button>
     <Button>Lunch</Button>
     <Button>Dinner</Button>
     </FilterContainer>
  )
}

export default Filter

 const FilterContainer = styled.section`
    display: flex;
    justify-content: center;
    gap:12px;
    padding: 40px;

 `

 const Button = styled.button`
    background-color:#ff4343;
    border-radius: 5px;
    color:white;
    padding:6px 12px;
    border:none;
    cursor: pointer;

 `