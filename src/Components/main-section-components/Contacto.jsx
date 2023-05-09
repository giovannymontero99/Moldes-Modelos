import React from 'react';
import './Contacto.css';

/**
 * Logos
 */
import whatsappLogo from '../../assets/logos/whatsapp.svg';
import gmailLogo from '../../assets/logos/gmail.svg';
import locationLogo from '../../assets/logos/location.svg';

const Contacto = () => {
  return (
    <footer className="Contacto" id="contacto">
      <div className="whatsappLogo">
        <div>
          <img src={whatsappLogo} alt="whatsapp logo" />
        </div>
        <div>(+57) 311-289-3123</div>
        <div>(+57) 313-497-3973</div>
      </div>
      <div className="gmailLogo">
        <div>
          <img src={gmailLogo} alt="gmail logo" />
        </div>
        <div>modelarte2020@gmail.com</div>
        <div>gamc1199@outlook.com</div>
      </div>
      <div className="locationLogo">
        <div>
          <img src={locationLogo} alt="location logo" />
        </div>
        <div>Calle 72A #78-39</div>
        <div>Bogotá D.C</div>
      </div>
    </footer>
  );
};

export default Contacto;
