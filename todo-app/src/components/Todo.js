import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DeleteContext } from "../App";
import { MarkTodoContext } from "../App";

const Todo = ({ todo, index}) => {
  const deleteTodo = useContext(DeleteContext);
  const markTodo = useContext(MarkTodoContext);

  return (
    <div className="one-todo">
      <h3>{index + 1}.</h3>
      <div className="data">
      <h2 className={todo.done ? "completed" : "incompleted"}>{todo.msg}</h2>
      <p>Due date: {todo.dueDate}</p>
      </div>
      <div className="buttons">
        <button
          className="mark"
          onClick={() => {
            markTodo(index);
          }}
        >
          Done
        </button>
        <Link
          to="/edit"
          className="edit"
          onClick={() => {
            // markTodo(index);
          }}
        >
          Edit
        </Link>
        <button
          className="delete"
          onClick={() => {
            deleteTodo(index);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
