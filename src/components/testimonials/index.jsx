import "./index.sass";
import Section_title from "../section_title";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials_container">
        <div className="left">
          <Section_title />
          <img src="#" alt="" />
        </div>
        <div className="right">
          <a href="#">Get in touch</a>
          <div className="brand_client">Venture</div>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            natus vel sequi numquam voluptatibus sapiente ipsam accusamus. Quae,
            adipisci distinctio deserunt delectus molestias dicta ab? Harum,
            quam facilis. Labore, error.
          </p>
          <div className="bottom">
            <div className="user_client">
              <h3>ANDY SMITH</h3>
              <p>VP OF DEVOPS AT VENTURE</p>
            </div>
            <div className="arrows">
              left Right
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
