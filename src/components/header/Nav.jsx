import "./nav.sass"
const Nav = () => {
  return (
    <nav className="main-menu">
      <ul className="nav-item">
        <li className="active">Home</li>
        <li>Sobre Mi</li>
        <li>Portafolio</li>
        <li>Contacto</li>
        <li>Tienda</li>
      </ul>
    </nav>
  );
};

export default Nav;
