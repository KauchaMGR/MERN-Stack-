import React from 'react'
import Header from './Components/layouts/Header'
import Footer from './Components/layouts/Footer'
import Card from './Components/Card'
import Button from './Components/Button'
import Component from './Components/Component'

function App() {

  const handleClick = () => {
    alert('  save Button  was clicked!')
  }
  const deleteClick = () => {
    alert('  delete Button  was clicked!')
  }

  return (
    <div className="min-h-screen w-full max-w-6xl mx-auto bg-slate-100 px-4 py-6 text-slate-800">
      <Header />
      <Card name="John Doe" />
      <Card name="Jane Smith" />
      <Button label="Save" onClick={handleClick} color="blue" />
      <Button label="Delete" onClick={deleteClick} color="red" />
      <Component />
      <Footer />
    </div>
  )
}

export default App
