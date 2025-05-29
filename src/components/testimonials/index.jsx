import "./index.sass";
import SectionTitle from "../SectionTitle.jsx";
import CarrouselSliderT from "./CarrouselSliderT.jsx"

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials_container">
          <SectionTitle
            sectionTitle="TESTIMONIOS"
            Title="Opiniones de clientes sobre mi trabajo"
          />
        <div className="slider_container_testimonials">
          <CarrouselSliderT />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
