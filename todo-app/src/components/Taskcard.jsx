import React from 'react'

export default function Taskcard({task,done,priority}) {
   const tasks = [
    { id: 1, text: "Learn JavaScript" },
    { id: 2, text: "Understand React Hooks" },
    { id: 3, text: "Build a Todo App" },
    { id: 4, text: "Master CSS Grid" },
    { id: 5, text: "Deploy to Vercel" }
  ];

  return (
    <div>

        {/* <div className="todo-lists">
            <h4>{task}</h4>
            <span>status:{done}</span>
            <span>{priority}</span> */}

        </div>  
        <ul>
          {
            tasks.map((task)=>
            (
              <li key={task.id} >
                {task.text}

              </li>
            ))
            
          }
        </ul>
            
    </div>
  )
}
