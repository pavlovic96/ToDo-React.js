import React, { useEffect, useRef, useState } from "react";



function CreateTask(props) {
  const [task, setChange] = useState({
    msg: "",
    dueDate: "",
    important: false,
    done: false,
  });

  const submit = (e) => {
    e.preventDefault();
    props.inputTask(task);
    setChange({
      msg: "",
      dueDate: "",
      important: false,
    });
    // props.history.push('/')
  };

  const inputMsg = useRef();
  useEffect(() => {
    inputMsg.current.focus();
  }, []);


  return (
    <div id="add-task-wrap">
      <form action="" onSubmit={submit}>
        <input
          type="text"
          placeholder="Add new task"
          id="msg"
          ref={inputMsg}
          onChange={(e) => {
            setChange({ ...task, msg: e.target.value });
          }}
          value={task.msg}
        />
        <input
          type="date"
          name="due-date"
          id="dueDate"
          placeholder="due date"
          onChange={(e) => {
            setChange({ ...task, dueDate: e.target.value });
          }}
          value={task.dueDate}
        />

        <label className="container">
          Important
          <input
            type="checkbox"
            id="important"
            onChange={(e) => {
              setChange({ ...task, important: e.target.checked })}}
            checked={task.important}
          />
          <span className="checkmark"></span>
        </label>
        <button id="btn">Add</button>
      </form>
    </div>
  );
}

export default CreateTask;
