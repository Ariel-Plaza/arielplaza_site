import "./index.sass"
import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";
import Hamburguer from "./Hamburguer.jsx"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Logo />
      </div>
      <div className="menu">
        <Nav />
      </div>
      <Hamburguer/>
    </div>
  );
};

export default Navbar;
