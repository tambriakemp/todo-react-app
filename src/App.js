import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
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
