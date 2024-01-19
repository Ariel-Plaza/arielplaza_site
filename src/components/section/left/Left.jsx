import "./left.sass"
import "../../../styles/style.css"
import ButtonIcon from "../../ButtonIcon.jsx"
import iconarrow from "../../../assets/icons/down.png"
const Left = () => {
  return (
    <div className="left">
      <h1>Hola Soy Ariel, diseñador web</h1>
      <p>
        Un apasionado desarrollador web freelance, listo para convertir tus
        ideas en realidad.
      </p>
      <ButtonIcon icon={iconarrow}  />
    </div>
  );
}

export default Left