import React ,{useState} from 'react'


function Inputfeild() {
    const [tasks,setTask]=useState([]);
    const [inputVlaue,setInputValue]=useState('');
     const addTask=()=>{
        if(inputVlaue.trim()!=""){
            setTask([...tasks,{id:Date.now(),text:inputVlaue}]);
        }
        setInputValue('');
     };

     const deleteTask=(id)=>{
        setTask(tasks.filter(task=> task.id !=id));

     };

  return (
    <div>
      <input type="text" placeholder='Add tasks to be done'
      onChange={(e)=>{setInputValue(e.target.value)}}value={inputVlaue} />
      <button onClick={addTask}
      >+ Add task</button>

      <ul style={{listStyle:'none'}}>
        { tasks.map(task=>(
            <li key={task.id}>
                {task.text}
                 <button onClick={()=>deleteTask( task.id)}>&times;</button>
            </li>
        ))

        }
      </ul>

    </div>
  )
}

export default Inputfeild
