import {useState} from 'react';
import "./Styles.css"
import up from "./IMAGES/up.png"
import down from "./IMAGES/down.png"
import trash from "./IMAGES/trash.png"


export default function ToDoList() {
  const [tasks , setTasks] = useState([]);
  const [newtasks , setNewtasks] = useState("");


  const handleInputtChange =(event)=>{
    setNewtasks(event.target.value)
  }

  // add task
  const addTask =()=>{
    if (newtasks !== ""){
      setTasks(prevTasks =>[...prevTasks ,newtasks])
    }else{
      alert("error")
    }
    setNewtasks("");
  }
  const removeTask =(index)=>{
    setTasks(
      tasks.filter(function(element , i){
        return i !== index
      })
    )
  }
  const moveTaskUp =(index)=>{
    
    if (index > 0){
      const updateTaskPosition =[...tasks];
      [updateTaskPosition[index], updateTaskPosition[index -1]] =
      [updateTaskPosition[index - 1],updateTaskPosition[index]]
      setTasks(updateTaskPosition) 
    }
    
  }
  // move the task down
  const moveTaskDown =(index)=>{
    if (index < tasks.length -1){
      const updateTaskPosition =[...tasks];
      [updateTaskPosition[index], updateTaskPosition[index +1]] =
      [updateTaskPosition[index + 1],updateTaskPosition[index]]
      setTasks(updateTaskPosition) 
    }
  }
  return ( 
    <>
    <div className='mother-board'>
      <div className='add-task'>
        <div>
          <input onChange={handleInputtChange} value={newtasks} type="text" placeholder='add task'/>
        </div>
        <div>
          <button onClick={addTask}>add</button>
        </div>
      </div>
      <div >
        <div className='tasks'>
          {tasks.map(function(task , index){
            return <>
            <div key={index}>{task}</div>
           <div className='btns'>
             <div><button onClick={()=>removeTask(index)}><img src={trash}  /></button></div>
              <div><button onClick={()=>moveTaskUp(index)}><img src={up}  /></button></div>
              <div><button onClick={()=>{moveTaskDown(index)}}><img src={down}  /></button></div>
           </div>
            </>
          })}
        </div>
      </div>
    </div>
   
    </>
  )
}
