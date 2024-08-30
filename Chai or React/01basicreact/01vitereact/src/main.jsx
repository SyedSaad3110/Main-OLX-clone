import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return (
         <div>
            <h1>custom react !</h1>
         </div>
    )
}


// const ReactElement = {
//     type : 'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'click me to visit google'
// } 

  const anotherUser = "chao or react"

const anotherElement = (
    <a href="https://google.com" target="_blank">visit google</a>
)
const reactElement = React.createElement(
    'a',
     {href:'https://google.com',
        target:'_blank'
    },
    'click me to visit google',
    anotherUser
    )
     


ReactDOM.createRoot(document.getElementById('root')).render(
         reactElement
 
)
