import React from 'react';
import './MainSection.css';

const MainSection = () => {
  return (
    <div className="MainSection" id="servicios">
      <div className="mainsection-container">
        <div className="mainsection-services">
          <div>
            Moldes & Modelos se encuentra fuertemente especializado en la
            creación de moldes industriales en aceros de la mas alta calidad,
            con un excelente precisión brindando una pieza única ya que contamos
            con la capacidad de adaptación a las necesidades de nuestros
            clientes.
          </div>
          <div>
            <img src="https://imagenesmelas" alt="imagenes" />
          </div>
        </div>
        <div className="mainsection-services">
          <div>
            Moldes & Modelos desde sus inicios ha elaborado mas de 100 piezas
            únicas que nos ha permitido adaptarnos a las necesidades de nuestros
            clientes y especializarnos en la creación de moldes para inyección
            de plásticos y poliestireno para diferentes sectores industriales.
          </div>
          <div>
            <img src="https://imagenesmelas" alt="imagenes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
