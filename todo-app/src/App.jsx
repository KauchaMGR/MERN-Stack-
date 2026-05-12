import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./components/Header.jsx"  // 

function App() {
 

  return (
    <>
     <Header title="My Todo List" taskcount={8} ></Header>
    </>
  )
}

export default App
