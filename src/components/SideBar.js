import React from "react";
import Navigation from "./Navigation";
import "./sideBar.css";

function SideBar() {
  return (
    <div className="side-bar">
      <div className="logo-area">
        <h1>ToDo App</h1>
      </div>
      <Navigation />
    </div>
  );
}

export default SideBar;
