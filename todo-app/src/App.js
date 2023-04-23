import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import TodoList from "./components/TodoList";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//styles
import "./css/Header.css";
import "./css/CreateTask.css";
import "./css/TodoList.css";
import "./css/Todo.css";

function App() {
  const [todos, setTodos] = useState([
    {
      msg: "do it",
      date: "09.09.2022.",
      important: true,
      done: false,
      id: 98,
    },
    {
      msg: "deeeeu it",
      date: "09.09.2022.",
      important: true,
      done: false,
      id: 9,
    },
  ]);

  // componentDidMount() {
  //   let data = [];
  //   if (localStorage.data) {
  //     data = JSON.parse(localStorage.data);
  //   }
  //   this.setState({
  //     todos: data,
  //   });

  // }

  // componentDidUpdate() {
  //   localStorage.data = JSON.stringify([...this.state.todos]);
  // }

  const inputTask = (task) => {
    task.id = Math.floor(Math.random() * (10000 - 10) - 10);
    setTodos([...todos, task]);
  };

  const deleteTodo = (index) => {
    todos.splice(index, 1);
    setTodos(todos);
  };

  const markTodo = (index) => {
    todos[index].done = !todos[index].done;
    setTodos(todos);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                markTodo={markTodo}
              />
            }
          />
          <Route
            path="/new-task"
            element={<CreateTask inputTask={inputTask} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
