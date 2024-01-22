import Section_title from "../section_title";
import ButtonIcon from "../ButtonIcon.jsx";
import Card from "./Card.jsx"

import iconarrow from "../../assets/icons/down.png";
import htmlIcon from "../../assets/icons/html.svg";

import "./index.sass";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills_container">
        <div className="left">
          <Section_title
            sectionTitle="MY SKILLS"
            Title="My extensive list of skills"
          />
        </div>
        <div className="right">
          <ButtonIcon icon={iconarrow} rotateLeft={true} />
          <ButtonIcon icon={iconarrow} rotateRight={true} />
        </div>
        <div className="container_card">
          <Card
          icon={htmlIcon}
          title="HTML & CSS"
          info="Duis aute irure dolor in reprhenderit in voñuptate."
          />
          <Card
          icon={htmlIcon}
          title="HTML & CSS"
          info="Duis aute irure dolor in reprhenderit in voñuptate."
          />
          <Card
          icon={htmlIcon}
          title="HTML & CSS"
          info="Duis aute irure dolor in reprhenderit in voñuptate."
          />
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
