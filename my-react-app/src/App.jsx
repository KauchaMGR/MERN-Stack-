import React from 'react'
import Header from './Components/layouts/Header'
import Footer from './Components/layouts/Footer'
import Card from './Components/Card'

function App() {
  const cards = Array.from({ length: 6 })

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
