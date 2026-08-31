import React, { useState } from 'react'

function Count({ mode, color }) {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <div className="p-4" style={{ backgroundColor: color }}>
            <div>{count}</div>
            <button
                onClick={increment}
                className="mb-2 cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
                Increment
            </button>
            <button
                onClick={mode}
                className="mb-2 cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
                Mode
            </button>
        </div>
    )
}

export default Count
