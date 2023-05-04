import React, { useEffect, useState } from 'react';
import './ScrollUp.css';

const ScrollUp = () => {
  const [scrollUpActive, setScrollUpActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 500
        ? setScrollUpActive(true)
        : setScrollUpActive(false);
    });
  }, []);

  return (
    <>
      {scrollUpActive ? (
        <div>
          <a className="scrollup" href="#header">
            👆
          </a>
        </div>
      ) : null}
    </>
  );
};

export default ScrollUp;
