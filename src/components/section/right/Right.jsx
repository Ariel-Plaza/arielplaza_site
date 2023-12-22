import {RightComponent} from "./Rsection.jsx"
const Right = () => {
  return (
    <div className="right">
      <RightComponent
        componentTitle="ABOUT ME"
        componentInfo="Lorem ipsum dolor sit amet adipelit sed eiusmte."
        componentButton="LEER MAS"
      />
      <RightComponent
        componentTitle="MI TRABAJO"
        componentInfo="Lorem ipsum dolor sit amet adipelit sed eiusmte."
        componentButton="VER PORTAFOLIO"
      />
    </div>
  ); 
}

export default Right;
