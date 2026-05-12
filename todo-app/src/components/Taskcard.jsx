import React from 'react'

export default function Taskcard({task,done,priority}) {

  return (
    <div>

        <div className="todo-lists">
            <h4>{task}</h4>
            <span>status:{done}</span>
            <span>{priority}</span>

            </div>  
    </div>
  )
}
