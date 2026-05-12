import React from 'react'

export default function Taskcard({ task, done, priority }) {
  const tasks = [
    { id: 1, text: "Learn JavaScript", done: true },
    { id: 2, text: "Understand React Hooks", done: false },
    { id: 3, text: "Build a Todo App", done: true },
    { id: 4, text: "Master CSS Grid", done: false },
    { id: 5, text: "Deploy to Vercel", done: true }
  ];

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: '10px' }}>
            {task.text}
            
            {/* Added the missing closing bracket for the conditional logic */}
            {task.done && (
              <span style={{
                marginLeft: '10px',
                padding: '2px 6px',
                backgroundColor: '#dcfce7',
                color: '#166534',
                fontSize: '12px',
                borderRadius: '4px'
              }}>
                Done
              </span>
            )} 
            
          </li>
        ))}
      </ul>
    </div>
  )
}

