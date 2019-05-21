import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="top-bar">
        <div>
          <p>search</p>
        </div>
        <div>
          <img src="/images/avatar.svg" alt="avatar" />
        </div>
      </div>
      <div className="bottom-bar">
        <div>
          <h4>ToDo App</h4>
        </div>
        <div>
          <p>breadcrumbs</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
