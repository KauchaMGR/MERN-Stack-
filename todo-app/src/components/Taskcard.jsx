import React from 'react'

export default function Taskcard({ task, done, priority,onDelete }) {
  const tasks = [
    { id: 1, text: "Learn JavaScript", done: true ,isAdmin:true},
    { id: 2, text: "Understand React Hooks", done: false,isAdmin:false },
    { id: 3, text: "Build a Todo App", done: true ,isAdmin:true },
    { id: 4, text: "Master CSS Grid", done: false,isAdmin:true },
    { id: 5, text: "Deploy to Vercel", done: true,isAdmin:false }
  ];

  return (
    <div>
      <ul style={{listStyle:'none'}}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: '10px' }}>
            {task.text}
            <button 
              onClick={() => onDelete(task.id)} 
              style={{ marginLeft: '10px', cursor: 'pointer' }}
            >
              Delete
            </button>
            
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
            {task.isAdmin && (
              <span
              style={{
                 marginLeft: '10px',
                padding: '2px 6px',
                backgroundColor: '#dcfce7',
                color: '#166534',
                fontSize: '12px',
                borderRadius: '4px'
              }}>
                Admin
              </span>
            )} 
            
          </li>
        ))}
      </ul>
    </div>
  )
}

