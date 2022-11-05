import React, {useState} from "react";

function Task({taskProp}) {

  const {text, category} = taskProp

  const [show, setShow] = useState(true)

  function handleDelete() {
    setShow(!show)
  }

  const handleRender = () => {
     show === true ?  : }

  console.log(show)

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
