import SectionTitle from "../SectionTitle.jsx";
import ButtonIcon from "../ButtonIcon.jsx";
import Card from "./Card.jsx";
import iconarrow from "../../assets/icons/down.png";
import htmlIcon from "../../assets/icons/html.svg";
import jsIcon from "../../assets/icons/js.png";
import nodejsIcon from "../../assets/icons/nodejs.png";

import "./index.sass";
import CarrouselSLider from "./CarrouselSlider.jsx"
const Skills = () => {
  return (
    <div className="skills">
      <div className="skills_container">
          <SectionTitle
            sectionTitle="MIS APTITUDES"
            Title="Conocimientos"
          />
        <div className="slider_container">
          <CarrouselSLider/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
