import { useMediaQuery } from "react-responsive";
import "./index.sass";
import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";
import Hamburguer from "./Hamburguer.jsx";

const Header = () => {
  const isTablet = useMediaQuery({ maxWidth: 990 });

  return (
    <div className="header">
      <div className="logo">
        <Logo />
      </div>
      {isTablet ? <Hamburguer /> : <Nav />}
    </div>
  );
};

export default Header;
