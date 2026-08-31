import React,{useState}from 'react'

const Footer = () => {
  const [dice, setDice] = useState(0)

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    setDice(randomNumber)
  }
  return (
    <>

    <div>
     < h1 className="text-3xl  text-center font-bold text-red-500">This is footer</h1>
    </div>
     <button onClick={rollDice} className="mb-2 cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
        Roll Dice
      </button>
      <div className="text-center text-2xl font-bold mt-4">
        {dice === 1 && '🎲'}
        {dice === 2 && '🎲🎲'}
        {dice === 3 && '🎲🎲🎲'}
        {dice === 4 && '🎲🎲🎲🎲'}
        {dice === 5 && '🎲🎲🎲🎲🎲'}
        {dice === 6 && '🎲🎲🎲🎲🎲🎲'}
      </div>

    </>
  )
}

export default Footer
