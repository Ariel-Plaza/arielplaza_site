import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card.jsx"

import iconarrow from "../../assets/icons/down.png";
import htmlIcon from "../../assets/icons/html.svg";
import jsIcon from "../../assets/icons/js.png";
import nodejsIcon from "../../assets/icons/nodejs.png";

import { FaAngleRight } from "react-icons/fa6";

import "./carrouselslider.sass"



export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <Slider {...settings}>
      <div>
        <Card
          icon={htmlIcon}
          title="HTML & CSS"
          info="Experiencia destacada en la creación de interfaces web
                estéticas, funcionales, accesibles y responsivas."
        />
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <FaAngleRight />
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
