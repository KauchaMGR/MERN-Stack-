import React from 'react'
import { useState } from 'react'

function Count() {
    const [count, setCount] =useState(0);
   const increment =() =>{
    setCount(count + 1);
    console.log(count);
   }
  return (
    <div>
        <div>{count}</div>
        <button onClick={increment} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mb-2'>Increment</button>
    </div>
  )
}

export default Count
