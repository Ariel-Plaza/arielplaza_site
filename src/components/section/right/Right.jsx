import "./right.sass"
import { RightComponent } from "./Rsection.jsx"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Right = () => {
  return (
    <div className="right">
      <RightComponent
        componentTitle="SOBRE MI"
        componentInfo="Cuento con experiencia en diseño y creacion web. Ofrezco soluciones
        creativas y eficientes que se ajustan a necesidades específicas."
        componentButton="LEER MAS"
      />
      <RightComponent
        componentTitle="MI TRABAJO"
        componentInfo="He trabajado en el desarrollo de tiendas online y sitios web corporativos. Entre mis trabajos destacan Marticar Roller, Ryslogistica.cl, Arbass.cl, utilizando WordPress, Elementor, WooCommerce."
        componentButton="VER PORTAFOLIO"
      />
      <div className="socials">
          <a href="https://www.github.com">
            <FaGithub size={35} />
          </a>
          <a href="https://www.linkedin.com">
            <FaLinkedin size={35} />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram size={35} />
          </a>
          <a href="https://www.facebook.com">
            <FaFacebook size={35} />
          </a>
          <a href="https://www.twitter.com">
            <FaTwitter size={35} />
          </a>
        
      </div>
    </div>
  ); 
}

export default Right;