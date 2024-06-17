import "./clients.sass"


import CompanyLogo from "./../clients/CompanyLogo.jsx";
import aprLogo from "../../../assets/img/about/apr.png";
import marticarLogo from "../../../assets/img/about/marticar.png";
import arbassLogo from "../../../assets/img/about/arbass.png";

const Clients = () => {
  return (
    <div className="clients">
      <div className="line" />
      <div className="content">
        <h1>TRABAJE PARA:</h1>
        <div className="icons">
          <CompanyLogo src={aprLogo} alt={"Logo Apr Maicolpue"} />
          {/* <CompanyLogo src={marticarLogo} alt={"Logo MArticarroller"} /> */}
          <CompanyLogo src={arbassLogo} alt={"Logo Arbass"} />
        </div>
      </div>
    </div>
  );
};

export default Clients;