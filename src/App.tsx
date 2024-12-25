// src/App.tsx
import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import ContactFooter from "./components/contactFooter/contactFooter";
import Home from "./pages/home/home";
import ContactPage from "./pages/contact/contactPage";
import Projects from "./pages/projects/projects";
import StocksInSeconds from "./pages/stocksInSeconds/stocksInSeconds";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="appContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/projects/stocksinseconds"
            element={<StocksInSeconds />}
          />
        </Routes>
        <ContactFooter />
      </div>
    </Router>
  );
};

export default App;
