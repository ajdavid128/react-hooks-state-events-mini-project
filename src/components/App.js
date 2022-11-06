import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selected, setSelected] = useState("All") // All initial state to show complete list at render
  const [tasks, setTasks] = useState(TASKS)

  function handleSelect (categorySelection) {
    setSelected(categorySelection)
  }

  function addingTask (newTaskObj) {
    setTasks([...tasks, newTaskObj])
    
  }
  
  // FILTER NEEDS CALLBACK THAT WILL CHECK IF TRUE OR FALSE AND WHENEVER ITS TRUE, ITS ADDED TO THE NEW ARRAY
  const filteredTasks = tasks.filter((task) => {
    if (selected === "All") return true
    if (task.category === selected) return true
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  CATEGORIES={CATEGORIES} handleSelect={handleSelect}/>
      <NewTaskForm CATEGORIES={CATEGORIES} addingTask={addingTask}/>
      <TaskList taskData={filteredTasks}/>
    </div>
  );
}

export default App;


// if (selected === "All") {
//   return true
// } else if (task.category === selected) {
//    return true
// }