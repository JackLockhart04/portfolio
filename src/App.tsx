// src/App.tsx
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Home from "./pages/homePage/home";
import StocksInSeconds from "./pages/stocksInSecondsPage/stocksInSeconds";

const App: React.FC = () => {
  return (
    <Router>
      <div className="appContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Home />}>
            <Route path="/projects">
              <Route path="stocksinseconds" element={<StocksInSeconds />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
