import "./index.sass";
import SectionTitle from "../SectionTitle.jsx";
import CarrouselSliderT from "./CarrouselSliderT.jsx"

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials_container">
        <div className="up">
          <SectionTitle
            sectionTitle="TESTIMONIOS"
            Title="Opiniones de clientes sobre mi trabajo"
          />
        </div>
        <div className="slider_containert">
          <CarrouselSliderT />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
