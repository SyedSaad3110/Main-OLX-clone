import { useEffect, useState } from 'react'
import styled from "styled-components"
import Filter from './components/Filter'
import './App.css'
import SearchResult from './components/SearchResult'

export const BASE_URL = "http://localhost:9000/";

function App() {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


 
  useEffect(()=>{
    const fetchFoodData = async ()=>{
      setLoading(true);
  
        try {
          const response = await fetch(BASE_URL);
  
          const json = await response.json();

          setData(json);
  
          setLoading(false);
        } catch (error) {
          setError("unable to fetch data");
        }
  
        };
        fetchFoodData()
      },[]);
      console.log(data);
      

  if(error){
    return <div>{error}</div>
  }
if(loading){
  return <div>Loading.....</div>
}



  return (
    <>
  <Container>
    <TopContainer>

      
      <div className="logo">
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="search">
        <input type="text" placeholder='Search Food' />
      </div>
    </TopContainer>

    <Filter/>
  </Container>
  <SearchResult data={data}/>
 
  </>
  )
}

export default App


const Container = styled.div`
max-width: 1200px;
margin:0 auto;

`

const TopContainer = styled.section`
  min-height:140px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
.search input{
  background-color: transparent;
  border:1px solid red;
  color:white;
  border-radius:5px;
  height:40px;
  font-size:16px;
  padding:0 8px


}
`
