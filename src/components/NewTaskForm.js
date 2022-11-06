import React, {useState} from "react";

function NewTaskForm({CATEGORIES, addingTask}) {
  const [details, setDetails] = useState("")
  const [newCategory, setNewCategory] = useState("Code")

  function handleDetailsChange (e) {
    setDetails(e.target.value)
  }

  function handleCategoryChange (e) {
    setNewCategory(e.target.value)
  }

  function handleForm (e) {
    e.preventDefault()

    const newTaskObj = {
      text: details,
      category: newCategory
    }
    // console.log(newTaskObj)
    addingTask(newTaskObj)
    setDetails("")
    setNewCategory("Code")
  }

  return (
    <form className="new-task-form" onSubmit={handleForm}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailsChange} value={details}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange} value={newCategory}>
          {/* render <option> elements for each category here */}
          {CATEGORIES.map((eachCat) => {
            if (eachCat !== "All") return <option>{eachCat}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
