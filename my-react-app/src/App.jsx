import React, { useState } from 'react'
import Header from './Components/layouts/Header'
import Footer from './Components/layouts/Footer'
import Card from './Components/Card'
import Button from './Components/Button'
import Component from './Components/Component'
import Count from './Components/Count'

function App() {
  const [bgColor, setBgColor] = useState('white')

  const handleClick = () => {
    alert('  save Button  was clicked!')
  }

  const deleteClick = () => {
    alert('  delete Button  was clicked!')
  }

  const changeBg = () => {
   setBgColor((prev)=>(prev==='white'?'black':'white'))
  }

  return (
    <div
      className="min-h-screen w-full max-w-6xl mx-auto px-4 py-6 text-slate-800"
      style={{ backgroundColor: bgColor }}
    >
      <Header />
      <Card name="John Doe" />
      <Card name="Jane Smith" />
      <Button label="Save" onClick={handleClick} color="blue" />
      <Button label="Delete" onClick={deleteClick} color="red" />
      <Component />
      <Count mode={changeBg} color={bgColor} />
      <Footer />
    </div>
  )
}

export default App
