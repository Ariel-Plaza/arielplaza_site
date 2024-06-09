import "./index.sass";
import Left from "./left/Left.jsx";
import Right from "./right/Right.jsx";
import PictureBg from "./PictureBg.jsx";

const Section = () => {
  return (
    <div className="section" id="Inicio">
      <div className="container">
        <Left />
        <div className="center"></div>
        <Right />
      </div>
      <PictureBg />
    </div>
  );
};

export default Section;
