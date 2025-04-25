import { useMediaQuery } from "react-responsive";
import "./index.sass";
import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";
import Hamburguer from "./Hamburguer.jsx";

const Header = () => {
  const isTablet = useMediaQuery({ minWidth: 769 })
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
        <Logo />
      </div>
      {isTablet ? <Nav /> : <Hamburguer />}
      </div>
    </div>
  );
};

export default Header;
