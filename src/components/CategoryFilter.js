import React, {useState} from "react";

function CategoryFilter({prop, selected, setSelected}) {
  // const [selected, setSelected] = useState(false)

  function handleSelect(e) {
    setSelected(e.target.key)
    e.target.className = selected ? "Selected" : ""
  }

  const classSelected= selected ? "Selected" : ""
  const classNotSelected = selected ? "" : "Selected"

  const categoryArray = prop.map((eachCat) => {
    return(
      <button onClick={handleSelect} className={selected} key={eachCat}>{eachCat}</button>
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
