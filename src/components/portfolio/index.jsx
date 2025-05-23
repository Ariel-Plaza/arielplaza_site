import "./index.sass";
import SectionTitle from "../SectionTitle.jsx";
import Card from "./Card";
import iconmarticar from "../../assets/icons/logo_marticar.png";
import iconapr from "../../assets/icons/logo_apr.svg";
import iconaps from "../../assets/img/logo.svg";
import icon2 from "../../assets/icons/html.svg";

import portfolio1 from "../../assets/img/portfolio/marticar_portfolio.png";
import portfolio2 from "../../assets/img/portfolio/apr_portfolio.png";
import portfolio3 from "../../assets/img/portfolio/aps_portfolio.png";

import { FaArrowRight } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portafolio">
      <div className="portfolio_container">
        <div className="title">
          <SectionTitle
            sectionTitle="MI PORTAFOLIO"
            Title="Mira mis ultimos proyectos"
          />
        </div>
        <div className="button">
          <p>Todos mis proyectos</p>
          <FaArrowRight />
        </div>
        <div className="card_portfolio_container">
          <Card
            href={"https://www.marticarroller.cl"}
            portfolio_number="portfolio_card one"
            tecnology1="WORDPRESS"
            tecnology2="WOO"
            icon_client={iconmarticar}
            client="Marticar Roller"
            title="Tienda virtual autodministrable"
            img={portfolio1}
          />
          <Card
            href={"https://www.aprmaicolpue.cl"}
            portfolio_number="portfolio_card two"
            tecnology1="WORDPRESS"
            tecnology2="ELEMENTOR"
            icon_client={iconapr}
            client="APR Maicolpue"
            title="Pagina informativa"
            img={portfolio2}
          />
          <Card
            portfolio_number="portfolio_card three"
            tecnology1="REACT"
            tecnology2="SASS"
            icon_client={iconaps}
            client="Ariel Plaza - v1"
            title="Sitio web para desarrollador"
            img={portfolio3}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
