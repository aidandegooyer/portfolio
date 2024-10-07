import { HashRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Resume from "./components/Resume";
import AppNavbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import "./custom.scss";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <AppNavbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
