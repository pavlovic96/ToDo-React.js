import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import TodoList from "./components/TodoList";

//styles
import "./css/Header.css";
import "./css/CreateTask.css";
import "./css/TodoList.css";
import "./css/Todo.css";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    let data = [];
    if (localStorage.data) {
      data = JSON.parse(localStorage.data);
    }
    this.setState({
      todos: data,
    });
  }

  componentDidUpdate() {
    localStorage.data = JSON.stringify([...this.state.todos]);
  }

  inputTask = (task) => {
    task.id = Math.floor(Math.random() * (10000 - 10) - 10);
    this.setState({
      todos: [...this.state.todos, task],
    });
  };

  deleteTodo = (index) => {
    let copyTodos = [...this.state.todos];
    copyTodos.splice(index, 1);
    this.setState({
      todos: copyTodos,
    });
  };

  markTodo = (index) => {
    let copyTodos = [...this.state.todos];
    copyTodos[index].done = !copyTodos[index].done;
    this.setState({
      todos: copyTodos,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <CreateTask inputTask={this.inputTask} />
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          markTodo={this.markTodo}
        />
      </div>
    );
  }
}

export default App;
