import "./arrowDown.sass"
import arrowpic from "../../../assets/img/down.png";

const ArrowDown = () => {
  return (
    <div className="circle">
      <a className="arrow" href="#">
        <img src={arrowpic} alt="" />
      </a>
    </div>
    
  );
};

export default ArrowDown;
