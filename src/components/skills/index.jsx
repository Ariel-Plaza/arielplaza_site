import SectionTitle from "../SectionTitle.jsx";

import "./index.sass";
import CarrouselSLider from "./CarrouselSlider.jsx"
const Skills = () => {
  return (
    <div className="skills">
      <div className="skills_container">
          <SectionTitle
            sectionTitle="MIS APTITUDES"
            Title="Conocimientos y aptitudes"
          />
        <div className="slider_container">
          <CarrouselSLider/>
        </div>
      </div>
    </div>
  );
};

export default Skills;