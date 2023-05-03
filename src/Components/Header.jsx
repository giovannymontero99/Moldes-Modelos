import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <div className="header-section">
        <div>
          <a href="#inicio">Logo</a>
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
