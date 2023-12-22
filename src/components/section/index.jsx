import "./index.sass"; // Asegúrate de importar tus estilos aquí
import Left from "./left/Left.jsx";
import Right from "./right/Right.jsx";
import PictureBg from "./PictureBg.jsx";

const Section = () => {
  return (
    <div className="section">
      <div className="container">
        <Left />
        <Right />
      </div>
      <PictureBg />
    </div>
  );
};

export default Section;
