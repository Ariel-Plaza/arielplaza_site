import "./index.sass";
import Left from "./left/Left.jsx";
import Right from "./right/Right.jsx";
import PictureBg from "./PictureBg.jsx";

const MainSection = () => {
  return (
    <div className="mainSection" id="Inicio">
      <div className="container">
        <Left />
        <Right />
      </div>
      <PictureBg />
    </div>
  );
};

export default MainSection;
