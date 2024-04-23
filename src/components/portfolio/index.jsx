import "./index.sass";
import SectionTitle from "../SectionTitle.jsx";
import Card from "./Card";
import iconmarticar from "../../assets/icons/logo_marticar.jpg"
import iconapr from "../../assets/icons/logo_apr.svg";
import iconaps from "../../assets/img/logo.svg";

import icon2 from "../../assets/icons/html.svg";

import portfolio1 from "../../assets/img/portfolio/portfolio1.png"
import { FaArrowRight } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <div className="portafolio" id="portafolio">
      <div className="portfolio_container">
        <div className="title">
          <SectionTitle
            sectionTitle="MI PORTAFOLIO"
            Title="Mira mis ultimos proyectos"
          />
          <div className="button">
            <p>Todos mis proyectos</p>
            <FaArrowRight />
          </div>
        </div>
        <Card
          portfolio_number="portfolio_card one"
          tecnology1="WORDPRESS"
          tecnology2="WOO"
          icon_client={iconmarticar}
          client="Marticar Roller"
          title="Tienda virtual autodministrable"
          img={portfolio1}
        />
        <Card
          portfolio_number="portfolio_card two"
          tecnology1="WORDPRESS"
          tecnology2="ELEMENTOR"
          icon_client={iconapr}
          client="APR Maicolpue"
          title="Pagina informativa"
          img={portfolio1}
        />
        <Card
          portfolio_number="portfolio_card three"
          tecnology1="REACT"
          tecnology2="SASS"
          icon_client={iconaps}
          client="Ariel Plaza"
          title="Sitio web para desarrollador"
          img={portfolio1}
        />
      </div>
    </div>
  );
};

export default Portfolio;