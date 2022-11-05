import React from "react";
import Task from "./Task";


function TaskList({taskData}) {

  

  const taskArray = taskData.map( (taskItem) => {
    return (
      <Task  key={taskItem.text} taskProp={taskItem}/>
    )
  } )
  


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskArray}
    </div>
  );
}

export default TaskList;


// key={taskItem.text}