import React, {useState} from "react";

function CategoryFilter({CATEGORIES, handleSelect}) {
  // const [selected, setSelected] = useState(false) => Moved to app to pass down to TaskList component

  // consider having hanlder in App and passing down only handler function, rather than state var and setter function
  // function handleSelect(e) { 
  //   setSelected(e.target.key)
  //   console.log("hiii")
  //   e.target.className = selected ? "Selected" : ""
  // }

  const categoryArray = CATEGORIES.map((eachCat) => {
    return(
      <button 
      onClick={() => handleSelect(eachCat)} 
      key={eachCat}>{eachCat}</button>
    )
  })

    return (
      <div className="categories">
        <h5>Category filters</h5>
        {categoryArray}
        {/* render <button> elements for each category here */}
      </div>
    );
}

export default CategoryFilter;

// const classSelected= selected ? "Selected" : ""
//   const classNotSelected = selected ? "" : "Selected"