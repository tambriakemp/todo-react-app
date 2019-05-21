import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import MainContent from "./MainContent";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="left-panel">
        <SideBar />
      </div>
      <div className="right-panel">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
