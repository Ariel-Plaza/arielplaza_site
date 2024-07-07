import "./left.sass";
import SectionTitle from "../../SectionTitle.jsx";

const Left = () => {
  return (
    <div className="left">
      <SectionTitle
        sectionTitle="SOBRE MI"
        Title="He desarrollado sitios web desde 2011 "
      />
      <p>
        Centrando mi atención principalmente en el Front-end, inicialmentenpm
        diseñé páginas web utilizando HTML y CSS. Con el tiempo, amplié mis
        habilidades incorporando herramientas como Wordpress, Elementor, Divi y
        Woocommerce. Además, complementé mi experiencia con una carrera paralela
        como Técnico en Informática.
      </p>
      <div className="link">
        <button>Mas sobre mi</button>
        <hr className="line"></hr>
      </div>
    </div>
  );
};

export default Left;