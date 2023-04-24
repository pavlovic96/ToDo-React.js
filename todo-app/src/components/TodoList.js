import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div id="todo-list">
      {todos.map((todo, index) => {
        return <Todo todo={todo} key={todo.id} index={index} />;
      })}
    </div>
  );
};

export default TodoList;
