import React from 'react';
import './Services.css';

/**
 * Imagenes
 */

import imgPlastOne from '../../assets/imgs/plast.jpeg';
import imgPlastTwo from '../../assets/imgs/plast2.jpeg';
import imgPlastThree from '../../assets/imgs/plast3.jpeg';
import imgPlastFour from '../../assets/imgs/plast4.jpeg';

import imgAlumOne from '../../assets/imgs/alum.jpeg';
import imgAlumTwo from '../../assets/imgs/alum2.jpeg';
import imgAlumThree from '../../assets/imgs/alum3.jpeg';
import imgAlumFour from '../../assets/imgs/alum4.jpeg';

const Services = () => {
  return (
    <div className="Servicios" id="servicios">
      <div className="servicios-title">Servicios</div>
      <div className="servicios-container">
        <div className="servicios-container__description">
          <span>Moldes & Modelos</span> se encuentra fuertemente especializado
          en la creación de moldes industriales en aceros de la mas alta
          calidad, con un excelente precisión. <br /> <br />
          Contamos con servicios de moldes para inyección de aluminio,
          fabricación de moldes, fabricación de troqueles, piezas de precisión y
          muchos mas.
        </div>
        <div className="servicios-container__imgs">
          <img src={imgPlastOne} alt="imagenes" />
          <img src={imgPlastTwo} alt="imagenes" />
          <img src={imgPlastThree} alt="imagenes" />
          <img src={imgPlastFour} alt="imagenes" />
        </div>
        <div className="servicios-container__imgs">
          <img src={imgAlumOne} alt="imagenes" />
          <img src={imgAlumTwo} alt="imagenes" />
          <img src={imgAlumThree} alt="imagenes" />
          <img src={imgAlumFour} alt="imagenes" />
        </div>
        <div className="servicios-container__description">
          <span>Moldes & Modelos</span> desde sus inicios ha elaborado mas de
          100 piezas únicas que nos ha permitido adaptarnos a las necesidades de
          nuestros clientes y especializarnos en la creación de moldes para
          inyección de plásticos y poliestireno para diferentes sectores
          industriales.
        </div>
      </div>
    </div>
  );
};

export default Services;
