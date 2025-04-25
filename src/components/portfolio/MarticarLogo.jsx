import "./logo.sass"
import logotipo from "../../assets/icons/logo_marticar.jpg"

const Logo = () => {
  return (
    <figure>
      <a href="#">
        <img src={logotipo} alt="Marticar Roller" className="logo"/>
      </a>
    </figure>
  )
}

export default Logo;