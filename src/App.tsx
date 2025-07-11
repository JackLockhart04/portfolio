// src/App.tsx
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/navbar/navbar";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import ContactFooter from "./components/contactFooter/contactFooter";

// Pages
import Home from "./pages/home/home";
import ContactPage from "./pages/contact/contactPage";
import Resume from "./pages/resume/resume";
import Projects from "./pages/projects/projects";
import StocksInSeconds from "./pages/projects/stocksInSeconds/stocksInSeconds";
import CourseGenius from "./pages/projects/courseGenius/courseGenius";

// Styles
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="appContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/projects/stocksinseconds"
            element={<StocksInSeconds />}
          />
          <Route path="/projects/coursegenius" element={<CourseGenius />} />
        </Routes>
        <ContactFooter />
      </div>
    </Router>
  );
};

export default App;
