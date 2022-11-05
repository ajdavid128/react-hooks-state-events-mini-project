import React, {useState} from "react";
import Task from "./Task";


function TaskList({taskData}) {
  const [renderedItems, setRenderItems] = useState (taskData)
  console.log(renderedItems)
  
  const taskArray = taskData.map( (taskItem) => {
    return (
      <Task  key={taskItem.text} taskProp={taskItem}/>
    )
  })

  // const filteredITems = taskArray.filter()  

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskArray}
      {/* {renderedItems} */}
    </div>
  );
}

export default TaskList;


// key={taskItem.text}