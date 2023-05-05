import React from 'react';
import './Contacto.css';

/**
 * Logos
 */
import whatsappLogo from '../../assets/logos/whatsapp.svg';

const Contacto = () => {
  return (
    <footer className="Contacto" id="contacto">
      <div>
        <img src={whatsappLogo} alt="whatsapp logo" />
      </div>
    </footer>
  );
};

export default Contacto;
