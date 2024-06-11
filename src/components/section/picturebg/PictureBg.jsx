import React from "react";
import "./picturebg.sass";
import picture from "../../../assets/img/perfil.png";

const PictureBg = () => {
  return (
    <div className="containerPicture">
      <div className="pictureBg">
        <img src={picture} alt="Ariel Plaza" />
      </div>
    </div>
  );
};

export default PictureBg;