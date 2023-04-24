import React, { Component, useState } from "react";

class EditTask extends Component {

    state = {
        task: {msg: "do it",
        date: "09.09.2022.",
        important: true,
        done: false,
        id: 98,
        }
    }


render() {
  return (
    <div id="add-task-wrap">
      <form
        action=""
           onSubmit={edit}
      >
        <input
          type="text"
          placeholder="Add new task"
          id="msg"
          onChange={setChange}
          value={state.msg}
        />
        <input
          type="date"
          name="due-date"
          id="dueDate"
          placeholder="due date"
            onChange={setChange}
            value={state.dueDate}
        />

        <label className="container">
          Important
          <input
            type="checkbox"
            id="important"
            onChange={setImportant}
            checked={state.important}
          />
          <span className="checkmark"></span>
        </label>
        <button id="btn">Edit</button>
      </form>
    </div>
  );
}
}
export default EditTask;
