import React from "react";
import ToDoItem from "./ToDoItem";
import toDoData from "../toDoData";
import "./mainContent.css";

function MainContent() {
  const toDoItems = toDoData.map(item => (
    <ToDoItem key={item.id} item={item} />
  ));

  return (
    <main>
      <div className="select-all">
        <label class="container">
          <input type="checkbox" />
          <span class="checkmark" />
        </label>
      </div>
      {toDoItems}
    </main>
  );
}

export default MainContent;
