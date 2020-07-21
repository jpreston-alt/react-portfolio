import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactCanvas from "./components/ContactCanvas";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import MobileMenu from "./components/Navbar/MobileMenu";

function App() {
  return (
    < Router >
      <Route exact path="/" component={AboutPage} />
      <Route exact path="/react-portfolio/about" component={AboutPage} />
      <Route exact path="/react-portfolio" component={AboutPage} />
      <Route exact path="/react-portfolio/portfolio" component={PortfolioPage} />
      <Route exact path="/react-portfolio/skills" component={SkillsPage} />
      <MobileMenu />
      <ContactCanvas />
      <ResumeModal />
      <Footer />
    </Router >
  );
}

export default App;
