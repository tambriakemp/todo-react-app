import React from "react";
import "./toDoItem.css";

function ToDoItem(props) {
  return (
    <div className="todo-items">
      <div className="todo-item">
        <label class="container">
          {props.item.todoitem}
          <input type="checkbox" />
          <span class="checkmark" />
        </label>
      </div>
    </div>
  );
}
export default ToDoItem;
