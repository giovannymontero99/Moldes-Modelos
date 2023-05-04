import React, { useEffect, useState } from 'react';
import './MainSection.css';
import About from './Main-Section-Components/About';
import imgPlastOne from '../assets/imgs/plast.jpeg';
import imgPlastTwo from '../assets/imgs/plast2.jpeg';
import imgPlastThree from '../assets/imgs/plast3.jpeg';
import imgPlastFour from '../assets/imgs/plast5.jpeg';
import imgAlumOne from '../assets/imgs/alum.jpeg';
import imgAlumTwo from '../assets/imgs/alum5.jpeg';
import imgAlumThree from '../assets/imgs/alum3.jpeg';
import imgAlumFour from '../assets/imgs/alum4.jpeg';

const MainSection = () => {
  const [scrollUpActive, setScrollUpActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', (e) =>
      window.scrollY > 700 ? setScrollUpActive(true) : setScrollUpActive(false)
    );
  }, []);

  return (
    <>
      <div className="MainSection" id="servicios">
        {scrollUpActive ? (
          <div>
            <a className="scrollup" href="#header">
              👆
            </a>
          </div>
        ) : null}

        <div className="mainsection-container">
          <div className="mainsection-services">
            <div className="mainsection-services__description">
              Moldes & Modelos se encuentra fuertemente especializado en la
              creación de moldes industriales en aceros de la mas alta calidad,
              con un excelente precisión brindando una pieza única ya que
              contamos con la capacidad de adaptación a las necesidades de
              nuestros clientes.
            </div>
            <div className="mainsection-services__imgs">
              <img src={imgPlastOne} alt="imagenes" />
              <img src={imgPlastTwo} alt="imagenes" />
              <img src={imgPlastThree} alt="imagenes" />
              <img src={imgPlastFour} alt="imagenes" />
            </div>
          </div>
          <div className="mainsection-services">
            <div className="mainsection-services__imgs">
              <img src={imgAlumOne} alt="imagenes" />
              <img src={imgAlumTwo} alt="imagenes" />
              <img src={imgAlumThree} alt="imagenes" />
              <img src={imgAlumFour} alt="imagenes" />
            </div>
            <div className="mainsection-services__description">
              Moldes & Modelos desde sus inicios ha elaborado mas de 100 piezas
              únicas que nos ha permitido adaptarnos a las necesidades de
              nuestros clientes y especializarnos en la creación de moldes para
              inyección de plásticos y poliestireno para diferentes sectores
              industriales.
            </div>
          </div>
        </div>
      </div>
      <About />
    </>
  );
};

export default MainSection;
