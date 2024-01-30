import "./card.sass"
import ButtonIcon from "../ButtonIcon.jsx";

const Card = ({ icon, title, info }) => {
  return (
    <div className="card">
      <ButtonIcon icon={icon} />
      <h2>{title}</h2>
      <p>{info}</p>
      <div className="line" >
      </div>
    </div>
  );
}

export default Card;
