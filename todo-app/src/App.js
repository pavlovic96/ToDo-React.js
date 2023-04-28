import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import TodoList from "./components/TodoList";
// import EditTask from "./components/EditTask";
import {
  Routes,
  Route,
  BrowserRouter,
  Routes as Switch,
} from "react-router-dom";

//styles
import "./css/Header.css";
import "./css/CreateTask.css";
import "./css/TodoList.css";
import "./css/Todo.css";

export const DeleteContext = React.createContext();
export const MarkTodoContext = React.createContext();

const getLocalItems =()=>{
  let storedData = localStorage.getItem('data')
  if (storedData) {
    const parsedData = JSON.parse(storedData);
   return parsedData
  }
  else {
    return []
  }
}

function App() {
  const [todos, setTodos] = useState(getLocalItems());

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(todos));
  }, [todos]);

  const inputTask = (task) => {
    task.id = Math.floor(Math.random() * (10000 - 10) - 10);
    task.important === true
      ? setTodos([task, ...todos])
      : setTodos([...todos, task]);
  };

  const deleteTodo = (index) => {
    const filteredTodos = todos.filter((todo, i) => i !== index);
    setTodos(filteredTodos);
  };

  const markTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <DeleteContext.Provider value={deleteTodo}>
          <MarkTodoContext.Provider value={markTodo}>
            <Routes>
              {/* <Switch> */}
              {/* <Route path="/edit" element={<EditTask  todos={todos} />} /> */}{" "}
              <Route path="/" element={<TodoList todos={todos} />} />
              {/* </Switch> */}
              <Route
                path="/new-task"
                element={<CreateTask inputTask={inputTask} />}
              />
            </Routes>
          </MarkTodoContext.Provider>
        </DeleteContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
