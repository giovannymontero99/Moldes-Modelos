import React from 'react';
import './Slider.css';
import logoSlider from '../assets/logo.svg';

import banner from '../assets/imgs/banner.png';

const Slider = () => {
  return (
    <section className="Slider" id="inicio">
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="slider-section">
        <div className="slider-section__title">
          <h1>Moldes & Modelos</h1>
        </div>

        <div>
          <img src={logoSlider} alt="logo slider" />
        </div>
      </div>
    </section>
  );
};

export default Slider;
