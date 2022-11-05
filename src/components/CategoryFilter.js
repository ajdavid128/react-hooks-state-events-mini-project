import React, {useState} from "react";

function CategoryFilter({prop}) {
  // console.log(prop)

  const [selected, setSelected] = useState('')

  function handleSelect(e) {
    setSelected('selected')
    console.log(e.target.className)
  }
  




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
