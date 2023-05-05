import React from 'react';
import './Contacto.css';

/**
 * Logos
 */
import whatsappLogo from '../../assets/logos/whatsapp.svg';
import gmailLogo from '../../assets/logos/gmail.svg';

const Contacto = () => {
  return (
    <footer className="Contacto" id="contacto">
      <div className="whatsappLogo">
        <div>
          <img src={whatsappLogo} alt="whatsapp logo" />
        </div>
        <div>(+57) 313-497-3973</div>
      </div>
      <div className="gmailLogo">
        <div>
          <img src={gmailLogo} alt="gmail logo" />
        </div>
        <div>modelarte2020@gmail.com</div>
      </div>
    </footer>
  );
};

export default Contacto;
