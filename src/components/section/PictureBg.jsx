import React from "react";
import "./picturebg.sass";
import picture from "../../assets/img/perfil.png";

const PictureBg = () => {
  return (
    <div className="picture-bg">
      <img src={picture} alt="Ariel Plaza" />
    </div>
  );
};

export default PictureBg;
