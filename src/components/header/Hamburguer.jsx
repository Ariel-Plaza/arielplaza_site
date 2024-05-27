import React, { useState } from "react";
import "../header/hamburguer.sass";
import { FaBars } from "react-icons/fa6";

const Hamburguer = () => {
  const [menu, setMenu] = useState(false);

  function handleClick() {
    setMenu(!menu);
  }

  return (
    <div className="nav_hamburguer">
      <div className="figHamburguer" onClick={handleClick}>
        <i className="fa fa-bars fa-2xl" aria-hidden="true"></i>
      </div>
      {menu && (
        <div className="nav">
          <ul className="nav_item">
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Contacto</li>
            <li>Historia</li>
            <li>Imagenes</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hamburguer;
