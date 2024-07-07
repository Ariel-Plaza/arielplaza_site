import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card.jsx";
import htmlIcon from "../../assets/icons/html.svg";
import jsIcon from "../../assets/icons/js.png";
import nodejsIcon from "../../assets/icons/nodejs.png";
import wordpressIcon from "../../assets/icons/wordpress.png";
import wooIcon from "../../assets/icons/woo.png";

import "./carrouselslider.sass";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="slide_card">
        <Card
          icon={htmlIcon}
          title="HTML & CSS"
          info="Experiencia destacada en la creación de interfaces web
                estéticas, funcionales, accesibles y responsivas."
        />
      </div>
      <div className="slide_card">
        <Card
          icon={jsIcon}
          title="Javascript"
          info="Tengo habilidades desarrollando aplicaciones web dinámicas y funcionales, con tecnologías modernas y  metodologías de desarrollo."
        />
      </div>
      <div className="slide_card">
        <Card
          icon={nodejsIcon}
          title="Node JS"
          info="Familiarizado con el desarrollo de aplicaciones web, manejo npm, servidores HTTP y el desarrollo de API RESTful."
        />
      </div>
      <div className="slide_card">
        <Card
          icon={nodejsIcon}
          title="SQL"
          info="Diseño, mantengo bases de datos, optimizando consultas, integridad de datos,modelado de datos, normalización, consultas."
        />
      </div>
      <div className="slide_card">
        <Card
          icon={wordpressIcon}
          title="WORDPRESS"
          info="He creado paginas web, tiendas y blogs"
        />
      </div>
      <div className="slide_card">
        <Card
          icon={wooIcon}
          title="WOOCOMMERCE"
          info="Utilización de plataforma de pago con multiples opciones"
        />
      </div>
    </Slider>
  );
}
