import SectionTitle from "../SectionTitle.jsx";
import "./index.sass";
import CompanyLogo from "./CompanyLogo.jsx";
import aprLogo from "../../assets/img/about/apr.png";
import marticarLogo from "../../assets/img/about/marticar.png";
import arbassLogo from "../../assets/img/about/arbass.png";

const About = () => {
  return (
    <div className="about" id="sobreMi">
      <div className="about_container">
        <SectionTitle
          sectionTitle="SOBRE MI"
          Title="He desarrollado sitios web desde 2011 "
        />
        <div className="container_up">
          <div className="about_left">
            <p className="paragraph">
              Centrando mi atención principalmente en el Front-end,
              inicialmentenpm diseñé páginas web utilizando HTML y CSS. Con el
              tiempo, amplié mis habilidades incorporando herramientas como
              Wordpress, Elementor, Divi y Woocommerce. Además, complementé mi
              experiencia con una carrera paralela como Técnico en Informática.
            </p>
            <div className="button">Mas sobre mi</div>
          </div>
          <div className="about_center"></div>
          <div className="about_right">
            <div className="title">
              <div className="first">
                <h2>2</h2>
                <div className="subtitle_about-first">
                  <p>Años</p>
                  <p> Full-Stack JS</p>
                </div>
              </div>
              <div className="second">
                <h2>10</h2>
                <div className="subtitle_about-second">
                  <p>Proyectos</p>
                  <p>Realizados</p>
                </div>
              </div>
            </div>
            <p className="text-bottom">
              En el ultimo tiempo he aprendido sobre desarrollo Back-end.
              Aprendiendo JS, Node, SQL, Bootstrap, React.
            </p>
          </div>
        </div>
        <div className="container_bottom">
          <div className="clients">
            <div className="line" />
            <div className="content">
              <h2>TRABAJE PARA:</h2>
              <div className="icons">
                <CompanyLogo src={aprLogo} alt={"Logo Apr Maicolpue"} />
                <CompanyLogo src={marticarLogo} alt={"Logo MArticarroller"} />
                <CompanyLogo src={arbassLogo} alt={"Logo Arbass"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
