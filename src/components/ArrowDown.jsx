import "./arrowDown.sass"
import arrowpic from "../assets/img/down.png";

const ArrowDown = ({ rightArrow }) => {
  const arrowStyle = rightArrow ?{ transform: 'rotate(-90deg)' } : { transform: 'rotate(90deg)' };
  return (
    <div className="circle">
      <a className="arrow" href="#" style={arrowStyle}>
        <img src={arrowpic} alt="" />
      </a>
    </div>
  );
};

export default ArrowDown;