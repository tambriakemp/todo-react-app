import React from "react";
import ReactDOM from "react-dom";
//When imports don't have a relative path, it looks for a module instead of a file
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//ReactDOM.render(What do I want to render, Where do I want to render it)
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
