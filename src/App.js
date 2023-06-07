import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
// import Header from "./components/Header/Header";

function App() {
  return (
    <div className="main-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="container">
        <div className="sidebar-container"></div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
