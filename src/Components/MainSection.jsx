import React from 'react';
import './MainSection.css';

/**
 * MainSection => components
 */
import About from './main-section-components/About';
import Services from './main-section-components/Services';
import ScrollUp from './main-section-components/ScrollUp';
import Contacto from './main-section-components/Contacto';

const MainSection = () => {
  return (
    <>
      <div className="MainSection">
        <Services />
        <About />
        <ScrollUp />
        <Contacto />
      </div>
    </>
  );
};

export default MainSection;
