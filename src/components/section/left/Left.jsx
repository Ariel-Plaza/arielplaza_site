import "./left.sass"
import ButtonIcon from "../../ButtonIcon.jsx"
import iconarrow from "../../../assets/icons/down.png"
const Left = () => {
  return (
    <div className="left">
      <div className="lineUp"></div>
      <h1>Soy Ariel,
        Diseñador Web</h1>
      <p className="paragraph">
        Un apasionado desarrollador web freelance, listo para convertir tus
        ideas en realidad. Aplicando tecnologias modernas.
      </p>
      <ButtonIcon
        icon={iconarrow}
        href={"#sobreMi"}
      />
    </div>
  );
}

export default Left