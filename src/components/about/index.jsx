import "./index.sass";

import SectionTitle from "../SectionTitle.jsx";
import Left from "./left/Left.jsx";
import Right from "./right/Right.jsx";
import Clients from "./clients/Clients.jsx";

const About = () => {
  return (
    <div className="about" id="sobreMi">
      <div className="container">
        <SectionTitle
          sectionTitle="SOBRE MI"
          Title="He desarrollado sitios web desde 2011 "
        />
        <div className="upSection">
          <Left />
          <div className="center"></div>
          <Right />
        </div>
        <div className="bottomSection">
          <Clients />
        </div>
      </div>
    </div>
  );
};

export default About;
