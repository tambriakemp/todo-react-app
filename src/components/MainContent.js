import React from "react";
import ToDoItem from "./ToDoItem";
import "./mainContent.css";

function MainContent() {
  return (
    <main>
      <div className="select-all">
        <label class="container">
          <input type="checkbox" />
          <span class="checkmark" />
        </label>
      </div>
      <ToDoItem />
      <ToDoItem />
    </main>
  );
}

export default MainContent;
