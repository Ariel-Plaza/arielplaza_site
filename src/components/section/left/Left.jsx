import "./left.sass"
import ButtonIcon from "../../ButtonIcon.jsx"
import iconarrow from "../../../assets/icons/down.png"
const Left = () => {
  return (
    <div className="left">
      <p className="line_up"></p>
      <h1>Soy Ariel,<br />
        Diseñador Web</h1>
      <p>
        Un apasionado desarrollador web freelance, listo para convertir tus
        ideas en realidad.
      </p>
      <ButtonIcon
        icon={iconarrow}
        href={"#sobreMi"}
      />
    </div>
  );
}

export default Left