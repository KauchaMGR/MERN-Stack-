

function Button({label, onClick, color}) {
  return (
    <div>
      <button  onClick={onClick} className={`bg-red-500 hover:bg-${color}-700 text-balck font-bold py-2 px-4 rounded cursor-pointer mb-2 `}>{label}</button>
    </div>
  )
}

export default Button
