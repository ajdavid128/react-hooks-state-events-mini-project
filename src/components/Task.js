import React, {useState} from "react";

function Task({taskProp}) {

  const {text, category} = taskProp

  const [show, setShow] = useState(true)

  function handleDelete() {
    setShow(!show)
  }

  function Test() {
    return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
    )
  }
  // console.log(show)

  return (
    <>
      {show ? <Test /> : <></>}
    </>
  );
}

export default Task;

// {show ? <div className="text">{text}</div> : null}