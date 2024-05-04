import dev_pic from "../../assets/img/perfil.png";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import "./index.sass";
const Footer = () => {
  return (
    <div className="footer" id="contacto">
      <div className="footer_container">
        <div className="footer_upper">
          <div className="left">
            <div className="me">
              <img src={dev_pic} alt="" />
              <div className="contact_name">
                <h3>Ariel Plaza</h3>
                <p>Desarrollador Full-Stack</p>
              </div>
            </div>
            <div className="socials">
              <a href="https://www.github.com/Ariel-Plaza/" target="_blank">
                <FaGithub size={35} />
              </a>
              <a href="https://www.linkedin.com/in/arielplazas" target="_blank">
                <FaLinkedin size={35} />
              </a>
              <a href="https://www.instagram.com/arielplaza/" target="_blank">
                <FaInstagram size={35} />
              </a>
              <a
                href="https://www.facebook.com/ariel.plazasalinas"
                target="_blank"
              >
                <FaFacebook size={35} />
              </a>
              <a href="https://www.twitter.com/ArielPlaza_s" target="_blank">
                <FaTwitter size={35} />
              </a>
            </div>
          </div>
          <div className="right">
            <h2>Contacto</h2>
            <div className="contact_info">
              <div className="email">
                <a href="mailto:web@arielplaza.com">
                  <h4>CORREO:</h4>
                  <p>web@arielplaza.com</p>
                </a>
              </div>
              <div className="call_me">
                <a href="tel:+56986093996">
                  <h4>Llamame:</h4>
                  <p>(+569)8609-3996</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
          <div className="line" />
          <div className="info">
            <ul className="links">
              <li className="active">
                <a href="#Inicio">Home</a>
              </li>
              <li>
                <a href="#sobreMi">Sobre Mi</a>
              </li>
              <li>
                <a href="#portafolio">Portafolio</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;