import "./index.sass";
import Left from "./left/Left.jsx";
import Right from "./right/Right.jsx";
import PictureBg from "./PictureBg.jsx";

const Section = () => {
  return (
    <div className="section" id="Inicio">
      <div className="container">
        <div className="container_up">
          <Left />
          <Right />
        </div>
        <div className="container_down">
          <PictureBg />
        </div>
      </div>
    </div>
  );
};

export default Section;
