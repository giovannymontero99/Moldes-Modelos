import React from 'react';
import './MainSection.css';

/**
 * MainSection => components
 */
import About from './main-section-components/About';
import Services from './main-section-components/Services';
import ScrollUp from './main-section-components/ScrollUp';

const MainSection = () => {
  return (
    <>
      <div className="MainSection">
        <Services />
        <About />
        <ScrollUp />
      </div>
    </>
  );
};

export default MainSection;
