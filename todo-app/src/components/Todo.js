import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DeleteContext } from "../App";
import { MarkTodoContext } from "../App";

const Todo = ({ todo, index }) => {
  const deleteTodo = useContext(DeleteContext);
  const markTodo = useContext(MarkTodoContext);

  return (
    <div className={todo.important ? "important-todo" : "one-todo"}>
      <div className="details">
        <h1>{todo.important ? "!" : null}</h1>
        <div className="data">
          <h4 className={todo.done ? "completed" : "incompleted"}>
            {todo.msg}
          </h4>
          <p>Due date: {todo.dueDate}</p>
        </div>
      </div>
      <div className="buttons">
        <button
          className="mark"
          onClick={() => {
            markTodo(index);
          }}
        >
          <span className="material-symbols-outlined">done</span>
        </button>
        <Link to={"/edit/" + (index + 1)} className="edit">
          <span className="material-symbols-outlined">edit</span>
        </Link>
        <button
          className="delete"
          onClick={() => {
            deleteTodo(index);
          }}
        >
         <span className="material-symbols-outlined">
delete
</span>
        </button>
      </div>
    </div>
  );
};

export default Todo;
