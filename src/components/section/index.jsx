import "./index.sass";
import Left from "./left/Left.jsx";
import Right from "./right/Right.jsx";
import PictureBg from "./picturebg/PictureBg.jsx";

const Section = () => {
  return (
    <div className="section" id="Inicio">
      <div className="container">
        <div className="upSection">
          <Left />
          <Right />
        </div>
        <div className="bottomSection">
          <PictureBg />
        </div>
      </div>
    </div>
  );
};

export default Section;