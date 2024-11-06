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
          <Route path="/project">
            <Route path="stocksinseconds" element={<StocksInSeconds />} />
            {/* Add more project routes here */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
