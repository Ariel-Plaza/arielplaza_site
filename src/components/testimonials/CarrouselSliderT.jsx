import "./carrouselslidert.sass"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ClientCard from "./ClientCard.jsx"

import marticarUSer from "../../assets/img/testimonials/marticar_user.png";
import marticarIcon from "../../assets/img/about/marticar.png";
import aprUSer from "../../assets/img/testimonials/apr_user.png";
import aprIcon from "../../assets/img/about/apr.png";


export default function SimpleSlider() {
  const settings = {
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
      <div className="slide_clientcard">
        <ClientCard
          img={marticarUSer}
          brand={marticarIcon}
          info={'“Diseño e implementacion de tienda rapida y profesional."'}
          userclient="CAROLINA VILLARROEL"
          jobposition="PROPIETARIO"
        />
      </div>
      <div className="slide_clientcard">
        <ClientCard
          img={aprUSer}
          brand={aprIcon}
          info={
            '“Creacion de pagina profesional con lo solicitado y en tiempo."'
          }
          userclient="ULISES PLAZA"
          jobposition="ADMINISTRADOR"
        />
      </div>
      <div className="slide_clientcard">
        <ClientCard
          img={marticarUSer}
          brand={marticarIcon}
          info={'“Diseño e implementacion de tienda rapida y profesional."'}
          userclient="CAROLINA VILLARROEL"
          jobposition="PROPIETARIO"
        />
      </div>
      <div className="slide_clientcard">
        <ClientCard
          img={aprUSer}
          brand={aprIcon}
          info={
            '“Creacion de pagina profesional con lo solicitado y en tiempo."'
          }
          userclient="ULISES PLAZA"
          jobposition="ADMINISTRADOR"
        />
      </div>
    </Slider>
  );
}
