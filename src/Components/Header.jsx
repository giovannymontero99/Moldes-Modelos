import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="Header" id="header">
      <div className="header-section">
        <div class="hamburger hamburger--elastic">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
        <div className="header-section-logo-section">
          <a href="#inicio">inicio</a>
        </div>
        <div>
          <a href="#servicios">Servicios</a>
        </div>
        <div>
          <a href="#about">Acerca de nosotros</a>
        </div>
        <div>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
