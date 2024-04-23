import "./nav.sass"
const Nav = () => {
  return (
    <nav className="main-menu">
      <ul className="nav-item">
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
        <li>Tienda</li>
      </ul>
    </nav>
  );
};

export default Nav;
