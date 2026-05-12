import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./components/Header.jsx" 
import Taskcard from "./components/Taskcard.jsx"  // 

function App() {
 

  return (
    <>
     <Header title="My Todo List" taskcount={8} ></Header>
     <Taskcard task="go to gym" done="pending" priority="high" ></Taskcard>

    </>
  )
}

export default App
