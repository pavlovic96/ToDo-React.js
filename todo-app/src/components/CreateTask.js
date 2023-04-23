import React, { Component } from "react";

class CreateTask extends Component {
  state = {
    msg: "",
    dueDate: "",
    important: false,
    done: false,
  };

  setChange = (e) => {
    const input = e.target.id;
    this.setState({
      [input]: e.target.value,
    });
  };

  setImportant = (e) => {
    this.setState({ important: e.target.checked });
  };
  submit = (e) => {
    e.preventDefault();
    this.props.inputTask(this.state);
    this.setState({
      msg: "",
      dueDate: "",
      important: false,
    });
  };

  render() {
    return (
      <div id="add-task-wrap">
        <form action="" onSubmit={this.submit}>
          <input
            type="text"
            placeholder="Add new task"
            id="msg"
            onChange={this.setChange}
            value={this.state.msg}
          />
          <input
            type="date"
            name="due-date"
            id="dueDate"
            placeholder="due date"
            onChange={this.setChange}
            value={this.state.dueDate}
          />

          <label className="container">
            Important
            <input
              type="checkbox"
              id="important"
              onChange={this.setImportant}
              checked={this.state.important}
            />
            <span className="checkmark"></span>
          </label>
          <button id="btn">Add</button>
        </form>
      </div>
    );
  }
}

export default CreateTask;
