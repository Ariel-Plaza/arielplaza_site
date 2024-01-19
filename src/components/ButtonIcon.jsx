import "./buttonIcon.sass"
// import icon from "../assets/img/down.png";

const ButtonIcon = ({ icon, rotateRight, rotateLeft}) => {
  // const iconStyle = {
  //   transform: rotateRight ? "rotate(90deg)" : "rotate(0deg)",
  // };
 let iconStyle = {};

 if (rotateRight) {
   iconStyle.transform = "rotate(-90deg)";
 } else if (rotateLeft) {
   iconStyle.transform = "rotate(90deg)";
 }


  return (
    <div className="circle">
      <a className="arrow" href="#" style={iconStyle}>
        <img src={icon} alt="icon" />
      </a>
    </div>
  );
};

export default ButtonIcon;

