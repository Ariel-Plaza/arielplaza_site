import "./index.sass";
import SectionTitle from "../SectionTitle.jsx";
import ClientCard from "./ClientCard.jsx";
import CarolinaVillaroel from "../../assets/img/testimonials/mujer.jpg"
import defaultUSer from "../../assets/img/testimonials/andy_smith.jpeg";
import Venture from "../../assets/img/testimonials/venture.svg"
import ButtonIcon from "../ButtonIcon.jsx";
import iconarrow from "../../assets/icons/down.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials_container">
        <div className="up">
          <SectionTitle
            sectionTitle="Testimonios"
            Title="Opiniones de clientes sobre mi trabajo"
          />
          <a href="#">Contactame</a>
        </div>
        <div className="card_container">
          <ClientCard
            img={defaultUSer}
            brand={Venture}
            info={' “Diseño e implementacion de tienda rapida y profesional." '}
            userclient="CAROLINA VILLARROEL"
            jobposition="PROPIETARIO"
          />
        </div>
        <div className="arrows">
          <ButtonIcon icon={iconarrow} rotateLeft={true} />
          <ButtonIcon icon={iconarrow} rotateRight={true} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
