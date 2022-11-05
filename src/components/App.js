import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selected, setSelected] = useState(false)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  prop={CATEGORIES} selected={selected} setSelected={setSelected}/>
      <NewTaskForm />
      <TaskList taskData={TASKS}/>
    </div>
  );
}

export default App;
