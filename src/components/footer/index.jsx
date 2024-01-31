import dev_pic from "../../assets/img/dev_contact.jpg";

import "./index.sass";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_upper">
          <div className="left">
            <div className="me">
              <img src={dev_pic} alt="" />
              <div className="contact_name">
                <h3>Jhon Carter</h3>
                <p>Head of Engineering at Google</p>
              </div>
            </div>
            <div className="socials">
              <div className="social_one">Facebook</div>
              <div className="social_two">Twitter</div>
              <div className="social_three">Instagram</div>
            </div>
          </div>
          <div className="right">
            <h2>Get in touch</h2>
            <div className="contact_info">
              <div className="email">
                <h4>EMAIL ME:</h4>
                <p>contact@jhon.com</p>
              </div>
              <div className="call_me">
                <h4>Call Me:</h4>
                <p>(414)977-048</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <p>Designed: Ariel Plaza</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
