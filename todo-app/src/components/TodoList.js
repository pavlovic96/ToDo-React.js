import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, markTodo }) => {
  return (
    <div id="todo-list">
      {todos.map((todo, index) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            index={index}
            deleteTodo={deleteTodo}
            markTodo={markTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
