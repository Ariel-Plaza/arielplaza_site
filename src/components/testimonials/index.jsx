import "./index.sass";
import SectionTitle from "../SectionTitle.jsx";
import ClientCard from "./ClientCard.jsx";
import AndySmith from "../../assets/img/testimonials/andy_smith.jpeg"
import Venture from "../../assets/img/testimonials/venture.svg"
import ButtonIcon from "../ButtonIcon.jsx";
import iconarrow from "../../assets/icons/down.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials_container">
        <div className="up">
          <SectionTitle
            sectionTitle="Testimonial"
            Title="What the clients say about my work"
          />
          <a href="#">Get in touch</a>
        </div>
        <div className="card_container">
          <ClientCard
            img={AndySmith}
            brand={Venture}
            info={
              ' “John did an amazing work with our web-app, everything he did to optimize our software help us to reduce our loading speed by 56%" '
            }
            userclient="ANDY SMITH"
            jobposition="VP OF DEVOPS AT VENTURE"
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
