import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.svg';

const Header = () => {
  const [isBtnActive, setIsBtnActive] = useState(false);

  return (
    <header className="Header" id="header">
      <div
        onClick={() => setIsBtnActive(!isBtnActive)}
        class={`hamburger hamburger--elastic ${isBtnActive ? 'is-active' : ''}`}
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>

      <div
        className={`header-section ${
          isBtnActive ? 'header-section-is-active' : ''
        }`}
      >
        <div
          onClick={() => setIsBtnActive(!isBtnActive)}
          className="header-section-logo-section"
        >
          <a href="#inicio">inicio</a>
        </div>
        <div onClick={() => setIsBtnActive(!isBtnActive)}>
          <a href="#servicios">Servicios</a>
        </div>
        <div onClick={() => setIsBtnActive(!isBtnActive)}>
          <a href="#about">Acerca de nosotros</a>
        </div>
        <div onClick={() => setIsBtnActive(!isBtnActive)}>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
