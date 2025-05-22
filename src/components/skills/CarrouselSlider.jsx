import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card.jsx"

import iconarrow from "../../assets/icons/down.png";
import htmlIcon from "../../assets/icons/html.svg";
import jsIcon from "../../assets/icons/js.png";
import nodejsIcon from "../../assets/icons/nodejs.png";
import wordpressIcon from "../../assets/icons/wordpress.png";
import wooIcon from "../../assets/icons/woo.png";

import "./carrouselslider.sass"

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1440, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
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
          title="WORD"
          info="He creado paginas web, tiendas y blogs"
        />
      </div>
      <div className="slide_card">
        <Card
          icon={wooIcon}
          title="WO"
          info="Utilización de plataforma de pago con multiples opciones"
        />
      </div>
    </Slider>
  );
}
// export default function SimpleSlider() {
//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1440,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: false,
//         },
//       },
//     ],
//   };
//   return (
//     <Slider {...settings}>
//       <div className="slide_card">
//         <Card
//           icon={htmlIcon}
//           title="HTML & CSS"
//           info="Experiencia destacada en la creación de interfaces web
//                 estéticas, funcionales, accesibles y responsivas."
//         />
//         <Card
//           icon={jsIcon}
//           title="Javascript"
//           info="Tengo habilidades desarrollando aplicaciones web dinámicas y funcionales, con tecnologías modernas y  metodologías de desarrollo."
//         />
//       </div>
//       <div className="slide_card">
//         <Card
//           icon={nodejsIcon}
//           title="Node JS"
//           info="Familiarizado con el desarrollo de aplicaciones web, manejo npm, servidores HTTP y el desarrollo de API RESTful."
//         />
//         <Card
//           icon={nodejsIcon}
//           title="SQL"
//           info="Diseño, mantengo bases de datos, optimizando consultas, integridad de datos,modelado de datos, normalización, consultas."
//         />
//       </div>
//       <div className="slide_card">
//         <Card
//           icon={wordpressIcon}
//           title="WORDPRESS"
//           info="He creado paginas web, tiendas y blogs"
//         />
//         <Card
//           icon={wooIcon}
//           title="WOOCOMMERCE"
//           info="Utilización de plataforma de pago con multiples opciones"
//         />
//       </div>
//     </Slider>
//   );
// }
