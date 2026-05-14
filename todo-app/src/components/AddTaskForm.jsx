import React, { useState } from 'react';

function AddTaskForm({ tasks, onAddTask, onToggleTask, onDeleteTask }) {
    const [inputVlaue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask(inputVlaue); // Call parent function with the text input
        setInputValue('');     // Clear local input field
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Todo List</h2>
                
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input 
                        type="text" 
                        className="task-input"
                        placeholder='Add tasks to be done...'
                        onChange={(e) => { setInputValue(e.target.value) }} 
                        value={inputVlaue} 
                        style={styles.input}
                    />
                    <button type='submit' className="add-btn" style={styles.button}>
                        Add Task
                    </button>
                </form>

                     <ul style={styles.list}>
                    {tasks.length === 0 ? (
                        <p style={styles.emptyText}>No tasks yet. Add one above!</p>
                    ) : (
                        tasks.map(task => (
                            <li key={task.id} className="task-item" style={styles.listItem}>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => onToggleTask(task.id)} // Trigger parent toggle
                                    style={styles.checkbox}
                                />
                                <span
                                    style={{
                                        ...styles.taskText,
                                        textDecoration: task.completed ? 'line-through' : 'none',
                                        color: task.completed ? '#a0aec0' : '#2d3748',
                                    }}
                                >
                                    {task.text}
                                </span>
                         <button 
                                    onClick={() => onDeleteTask(task.id)} // Trigger parent delete
                                    className="delete-btn"
                                >
                                    &times;
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}
// Clean UI Stylesheet
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        paddingTop: '60px',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        width: '100%',
        maxWidth: '450px',
    },
    title: {
        margin: '0 0 20px 0',
        color: '#1a202c',
        fontSize: '24px',
        fontWeight: '700',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        gap: '10px',
        marginBottom: '25px',
    },
    input: {
        flexGrow: 1,
        padding: '12px 16px',
        borderRadius: '8px',
        border: '1px solid #cbd5e0',
        fontSize: '15px',
        outline: 'none',
        transition: 'all 0.2s',
    },
    button: {
        backgroundColor: '#0070f3',
        color: '#fff',
        border: 'none',
        padding: '12px 18px',
        borderRadius: '8px',
        fontSize: '15px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        whiteSpace: 'nowrap',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '8px',
        border: '1px solid #edf2f7',
        justifyContent: 'space-between',
    },
    checkbox: {
        cursor: 'pointer',
        width: '18px',
        height: '18px',
        accentColor: '#0070f3',
    },
    taskText: {
        flexGrow: 1,
        marginLeft: '14px',
        fontSize: '15px',
        wordBreak: 'break-word',
    },
    emptyText: {
        textAlign: 'center',
        color: '#718096',
        fontSize: '14px',
        marginTop: '15px',
    }
};

export default AddTaskForm;
