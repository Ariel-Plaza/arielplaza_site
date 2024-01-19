import {Section_title} from "../section_title";
import "./index.sass";

const About = () => {
  return (
    <div className="about">
      <div className="about_container">
        <div className="left">
          <Section_title
            sectionTitle="ABOUT ME"
            Title="I´ve been developing websites since 2010"
          />
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
          <div className="button">More about me</div>
        </div>
        <div className="center"></div>
        <div className="right">
          <div className="title">
            <div className="first">
              <h2>12</h2>
              <p>Years of experience</p>
            </div>
            <div className="second">
              <h2>150</h2>
              <p>Successful projects</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
        </div>
        <div className="clients">Clientes</div>
      </div>
    </div>
  );
};

export default About;