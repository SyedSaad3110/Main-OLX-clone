import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/contactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'

function App() {

  return (
    <>
    <div>
      <Navigation/>
      <ContactHeader/>
      <ContactForm/>
    </div>
    </>
  )
}

export default App
