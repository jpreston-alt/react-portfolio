import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactCanvas from "./components/ContactCanvas";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  return (
    < Router >
      {/* <Navbar /> */}
      <Route exact path="/" component={AboutPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/portfolio" component={PortfolioPage} />
      <Route exact path="/skills" component={SkillsPage} />
      <ContactCanvas />
      <Footer />
    </Router >
  );
}

export default App;
