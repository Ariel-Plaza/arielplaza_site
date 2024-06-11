import "./logo.sass"
import logotipo from "../../assets/img/logo.svg"

const Logo = () => {
  return (
    <div className="logo">
      <figure>
        <img
          src={logotipo}
          alt="Ariel Plaza - Desarrollador Web"
        />
      </figure>
    </div>
  );
}

export default Logo;