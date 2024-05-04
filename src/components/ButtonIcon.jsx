import "./buttonIcon.sass"
// import icon from "../assets/img/down.png";

function ButtonIcon({ icon, rotateRight, rotateLeft, href }) {
  const iconStyle = {};

  if (rotateRight) {
    iconStyle.transform = "rotate(-90deg)";
    iconStyle.marginLeft = "15px";
    iconStyle.padding = "0px";

  } else if (rotateLeft) {
    iconStyle.transform = "rotate(90deg)";
    iconStyle.marginRight = "15px";
    iconStyle.padding = "0px";
    
  }

  return (
    <div className="circle">
      <a className="arrow" href={href} style={iconStyle}>
        <img src={icon} alt="icon" />
      </a>
    </div>
  );
}

export default ButtonIcon;