import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./components/Header.jsx" 
import Taskcard from "./components/Taskcard.jsx"  
import Footer from "./components/Footer.jsx" 

function App() {
  const deletetask= (id)=>{
    console.log('the task is deleted having id',id);
    alert('task is beibg deleted',id);

  }
 

  return (
    <>
     <Header title="My Todo List" taskcount={8} ></Header>
     <Taskcard task="go to gym" done="pending" priority="high" onDelete={deletetask}  ></Taskcard>
     <Footer taskNumber={5} ></Footer>

    </>
  )
}

export default App
