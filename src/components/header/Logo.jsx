import "./logo.sass"
import logotipo from "../../assets/img/logo.svg"

const Logo = () => {
  return (
    <figure>
      <a href="#">
        <img src={logotipo} alt="Ariel Plaza - Desarrollador Web" className="logo"/>
      </a>
    </figure>
  )
}

export default Logo;