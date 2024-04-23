import "../header/hamburguer.sass"
import icon from "../../assets/img/hamburguer.svg";

const Hamburguer = () => {
  return (
    <figure className="figHamburguer">
      <a href="#">
        <img src={icon} alt="Menu hamburguer"  className="iconHamburguer"/>
      </a>
    </figure>
  );
};

export default Hamburguer;
