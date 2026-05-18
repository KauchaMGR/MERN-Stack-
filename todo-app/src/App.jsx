import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./components/Header.jsx" 
import Taskcard from "./components/Taskcard.jsx"  
import Footer from "./components/Footer.jsx"
import AddTask from "./components/AddTaskForm.jsx" 

function App() {
  const [tasks, setTask] = useState(()=>{
    const savedTasks=localStorage.getItem('myTasks');
    return savedTasks? JSON.parse(savedTasks):[];
  });

  useEffect(
    ()=>{
        localStorage.setItem('myTasks',JSON.stringify(tasks));
        console.log("one item is added");

    },[tasks]
  );

    const addTask = (text) => {
        if (text.trim() !== "") {
            setTask([...tasks, { id: Date.now(), text: text, completed: false }]);
        }
    };

    const toggleTask = (id) => {
        setTask(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTask(tasks.filter(task => task.id !== id));
    };
 

  return (
    <>
     <Header title="My Todo List" taskcount={8} ></Header>
      <AddTask
                tasks={tasks}
                onAddTask={addTask}
                onToggleTask={toggleTask}
                onDeleteTask={deleteTask}
            ></AddTask>



     {/* <Taskcard task="go to gym" done="pending" priority="high" onDelete={deletetask}  ></Taskcard> */}
     {/* <Footer taskNumber={5} ></Footer> */}

    </>
  )
}

export default App
