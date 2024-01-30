import "./index.sass";
import SectionTitle from "../SectionTitle.jsx";
import Card from "./Card";
import icon1 from "../../assets/icons/html.svg"
import portfolio1 from "../../assets/img/portfolio/portfolio1.png"

const Portfolio = () => {
  return (
    <div className="portafolio">
      <div className="portfolio_container">
        <div className="title">
          <SectionTitle
            sectionTitle="MY PORTFOLIO"
            Title="Take a look at the latest projects I’ve done"
          />
        </div>
        <Card
          portfolio_number="portfolio_card one"
          tecnology1="HTML"
          tecnology2="CSS"
          icon_client={icon1}
          client="Marticar"
          title="Store Web Development for Marticar Roller"
          img={portfolio1}
        />
        <Card
          portfolio_number="portfolio_card two"
          tecnology1="HTML"
          tecnology2="CSS"
          icon_client={icon1}
          client="Marticar"
          title="Store Web Development for Marticar Roller"
          img={portfolio1}
        />
        <Card
          portfolio_number="portfolio_card three"
          tecnology1="HTML"
          tecnology2="CSS"
          icon_client={icon1}
          client="Marticar"
          title="Store Web Development for Marticar Roller"
          img={portfolio1}
        />
      </div>
    </div>
  );
};

export default Portfolio;