import React from 'react';

function Header({ title, tasks }) {
  // Derive the active task count directly in the render cycle
  const activeTaskCount = tasks.filter(task => !task.completed).length;

  return (
    <div>
      <h1>{title}</h1>
      {activeTaskCount > 0 ? (
        <p>Total remaining tasks: {activeTaskCount}</p>
      ) : (
        <p>All tasks have been done</p>
      )}
    </div>
  );
}

export default Header;

