import React, {useState} from "react";
import Task from "./Task";


function TaskList({taskData}) {
  // const [renderedItems, setRenderItems] = useState (taskData)
  // console.log(taskData)
  
  const taskArray = taskData.map( (taskItem) => {
    return (
      <Task  key={taskItem.text} taskProp={taskItem}/>
    )
  })
 

  return (
    <div className="tasks">
      {taskArray}
    </div>
  );
}

export default TaskList;


// key={taskItem.text}