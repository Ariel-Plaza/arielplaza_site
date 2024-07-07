import "./clients.sass"

import CompanyLogo from "./../clients/CompanyLogo.jsx";
import aprLogo from "../../../assets/img/about/apr.png";
import marticarLogo from "../../../assets/img/about/marticar.png";
import arbassLogo from "../../../assets/img/about/arbass.png";
import rysLogo from "../../../assets/img/about/rys.png";

const Clients = () => {
  return (
    <div className="clients">
      <div className="divider"></div>
      <div className="content">
        <h1>ANTERIORMENTE TRABAJE EN</h1>
        <div className="icons">
          <CompanyLogo src={aprLogo} alt={"Logo Apr Maicolpue"} />
          <CompanyLogo src={marticarLogo} alt={"Logo MArticarroller"} />
          <CompanyLogo src={arbassLogo} alt={"Logo Arbass"} />
          <CompanyLogo src={rysLogo} alt={"Logo rys"} />
        </div>
      </div>
    </div>
  );
};

export default Clients;