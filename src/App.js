import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [currentNavLink, setCurrentNavLink] = useState("about");

  const renderLink = () => {
    switch (currentNavLink) {
      case "about":
          return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />
      default: 
        return null;
    }
  };

  return (
    <div>
      <div className="mobile-header">
        <Header currentNavLink={currentNavLink} setCurrentNavLink={setCurrentNavLink}></Header>
      </div>
      <div>
        <main>{renderLink()}</main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
