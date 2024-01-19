import "./card.sass"
import ButtonIcon from "../ButtonIcon.jsx";
import htmlIcon from "../../assets/icons/html.svg";


const Card = () => {
  return (
    <div className="card">
      <ButtonIcon icon={htmlIcon} />
      <h2>HTML&CSS</h2>
      <p>Duis aute irure dolor in reprhenderit in voñuptate.</p>
      <div className="line"></div>
    </div>
  );
}

export default Card;
