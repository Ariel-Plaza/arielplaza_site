import "./logo.sass"
import logotipo from "../../assets/img/logo.svg"

const Logo = () => {
  return (
    <figure>
        <img src={logotipo} alt="Ariel Plaza - Desarrollador Web" className="logo"/>
    </figure>
  )
}

export default Logo;