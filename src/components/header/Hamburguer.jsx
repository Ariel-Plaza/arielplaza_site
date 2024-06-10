import React, { useState } from "react";
import "../header/hamburguer.sass";
import { FaBars } from "react-icons/fa6";

const Hamburguer = () => {
  const [menu, setMenu] = useState(false);

  function handleClick() {
    setMenu(!menu);
  }

  return (
    <div className="navHamburguer">
      <div className="figHamburguer" onClick={handleClick}>
        <FaBars size={40} />
      </div>
      {menu && (
        <div className="nav">
          <ul className="navItem">
            <li className="active">
              <a href="#Inicio">Home</a>
            </li>
            <li>
              <a href="#sobreMi">Sobre Mi</a>
            </li>
            <li>
              <a href="#portafolio">Portafolio</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hamburguer;