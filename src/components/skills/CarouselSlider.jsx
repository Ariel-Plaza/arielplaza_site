
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card.jsx";
import htmlIcon from "../../assets/icons/html.svg";
import jsIcon from "../../assets/icons/js.png";
import nodejsIcon from "../../assets/icons/nodejs.png";
import wordpressIcon from "../../assets/icons/wordpress.png";
import wooIcon from "../../assets/icons/woo.png";

import "./carouselslider.sass";

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3, 
  slidesToScroll: 3, 
  responsive: [
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 1, 
        slidesToScroll: 1, 
      },
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2, 
        slidesToScroll: 2, 
      },
    },
  ],
};

const cardData = [
  {
    icon: htmlIcon,
    title: "HTML & CSS",
    info: "Experiencia en creación de interfaces estéticas, funcionales, accesibles y responsivas",
  },
  {
    icon: jsIcon,
    title: "Javascript",
    info: "Desarrollo aplicaciones web dinámicas, con tecnologías modernas",
  },
  {
    icon: nodejsIcon,
    title: "Node JS",
    info: "Aplicaciones web con manejo npm, HTTP y desarrollo de API RESTful",
  },
  {
    icon: nodejsIcon,
    title: "SQL",
    info: "Diseño, mantencion, consultas, modelado de datos, normalización, consultas en BD",
  },
  {
    icon: wordpressIcon,
    title: "WORDPRESS",
    info: "He creado páginas web, tiendas y blogs",
  },
  {
    icon: wooIcon,
    title: "WOOCOMMERCE",
    info: "Utilización de plataforma de pago con múltiples opciones",
  },
];

export default function SimpleSlider() {
  return (
    <Slider {...sliderSettings}>
      {cardData.map((card, index) => (
        <div key={index} className="slide_card">
          <Card icon={card.icon} title={card.title} info={card.info} />
        </div>
      ))}
    </Slider>
  );
}