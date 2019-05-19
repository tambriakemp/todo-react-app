import React from "react";
import "./toDoItem.css";

function ToDoItem() {
  const date = Date();

  return (
    <div className="todo-items">
      <div className="todo-item">
        <label class="container">
          Two
          <input type="checkbox" />
          <span class="checkmark" />
        </label>

        {/* <span>{date}</span> */}
      </div>
    </div>
  );
}
export default ToDoItem;
