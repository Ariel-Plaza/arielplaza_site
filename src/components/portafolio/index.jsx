import "./index.sass";
import Section_title from "../section_title";
import Card from "./Card";

const Portfolio = () => {
  return (
    <div className="portafolio">
      <div className="portfolio_container">
        <div className="title">
          <Section_title
            sectionTitle="MY PORTFOLIO"
            Title="Take a look at the latest projects I’ve done"
          />
        </div>
        <Card portfolio_number="portfolio_card one" />
        <Card portfolio_number="portfolio_card two" />
        <Card portfolio_number="portfolio_card three" />
      </div>
    </div>
  );
};

export default Portfolio;
