import React, { Component } from "react";

class CreateTask extends Component {
  state = {
    msg: "",
    done: false,
  };

  setMsg = (e) => {
    this.setState({
      msg: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    this.props.inputTask(this.state);
    this.setState({
      msg: "",
    });
  };

  render() {
    return (
      <div id="add-task-wrap">
        <form action="" onSubmit={this.submit}>
          <input
            type="text"
            placeholder="Add new task"
            id="add-task"
            onChange={this.setMsg}
            value={this.state.msg}
          />
          <input
            type="date"
            name="due-date"
            id="due-date"
            placeholder="due date"
          />
          <input type="checkbox" name="important" id="important" /> Important
          <button id="btn">Add</button>
        </form>
      </div>
    );
  }
}

export default CreateTask;
