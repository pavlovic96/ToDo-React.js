import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function EditTask(props) {
  const [task, setChange] = useState({
    msg: "",
    date: "",
    important: "",
    done: "",
    id: "",
  });

  const {index} = useParams();

 useEffect(()=>{
  const todoToEdit = props.todos[index-1];
  setChange(todoToEdit);
 },[])


  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    props.editTodo(task);
    setChange({
      msg: "",
      dueDate: "",
      important: false,
    });

    navigate("/");
  };

  return (
    <div id="add-task-wrap">
      <form action="" onSubmit={submit}>
        <input
          type="text"
          placeholder="Add new task"
          id="msg"
          onChange={(e) => {
            setChange({ ...task, msg: e.target.value });
          }}
          defaultValue={task.msg}
        />
        <input
          type="date"
          name="due-date"
          id="dueDate"
          placeholder="due date"
          onChange={(e) => {
            setChange({ ...task, dueDate: e.target.value });
          }}
          defaultValue={task.dueDate}
        />

        <label className="container">
          Important
          <input
            type="checkbox"
            id="important"
            onChange={(e) => {
              setChange({ ...task, important: e.target.checked });
            }}
            checked={task.important}
          />
          <span className="checkmark"></span>
        </label>
        <button id="btn-edit">Edit</button>
      </form>
    </div>
  );
}

export default EditTask;
