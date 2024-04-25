import SectionTitle from "../SectionTitle.jsx";
import ButtonIcon from "../ButtonIcon.jsx";
import Card from "./Card.jsx"
import iconarrow from "../../assets/icons/down.png";
import htmlIcon from "../../assets/icons/html.svg";
import jsIcon from "../../assets/icons/js.png";
import nodejsIcon from "../../assets/icons/nodejs.png";

import "./index.sass";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills_container">
        <div className="left">
          <SectionTitle
            sectionTitle="MIS APTITUDES"
            Title="Concocimientos y aptitudes"
          />
        </div>
        <div className="right">
          <ButtonIcon
            icon={iconarrow}
            rotateLeft={true}
            style={{ backgroundColor: "red" }}
          />
          <ButtonIcon icon={iconarrow} rotateRight={true} />
        </div>
        <div className="container_card">
          <Card
            icon={htmlIcon}
            title="HTML & CSS"
            info="Experiencia destacada en la creación de interfaces web
                estéticas, funcionales, accesibles y responsivas."
          />
          <Card
            icon={jsIcon}
            title="Javascript"
            info="Tengo habilidades desarrollando aplicaciones web dinámicas y funcionales, con tecnologías modernas y  metodologías de desarrollo."
          />
          <Card
            icon={nodejsIcon}
            title="Node JS"
            info="Familiarizado con el desarrollo de aplicaciones web, manejo npm, servidores HTTP y el desarrollo de API RESTful."
          />
          <Card
            icon={nodejsIcon}
            title="SQL"
            info="diseño, mantengo bases de datos, optimizando consultas, integridad de datos,modelado de datos, normalización, consultas."
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;