import "./nav.sass"
const Nav = () => {
  return (
    <div className="nav">
      <ul className="navItem">
        <li className="active">
          <a href="#Inicio">Home</a>
        </li>
        <li>
          <a href="#sobreMi">Sobre Mi</a>
        </li>
        <li>
          <a href="#portafolio">Portafolio</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </div>
  );
};
export default Nav;