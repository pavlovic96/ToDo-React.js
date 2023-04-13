import React from "react";

const Todo = ({ todo, index, deleteTodo, markTodo }) => {
  return (
    <div className="one-todo">
      <h3>Task:{index + 1}</h3>
      <h2 className={todo.done ? "completed" : "incompleted"}>{todo.msg}</h2>
      <button
        className="delete"
        onClick={() => {
          deleteTodo(index);
        }}
      >
        Delete
      </button>
      <button
        className="mark"
        onClick={() => {
          markTodo(index);
        }}
      >
        Mark
      </button>
    </div>
  );
};

export default Todo;
