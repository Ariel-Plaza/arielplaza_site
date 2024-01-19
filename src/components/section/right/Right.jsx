import "./right.sass"
import { RightComponent } from "./Rsection.jsx"
const Right = () => {
  return (
    <div className="right">
      <RightComponent
        componentTitle="SOBRE MI"
        componentInfo="Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida."
        componentButton="LEER MAS"
      />
      <RightComponent
        componentTitle="MI TRABAJO"
        componentInfo="Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida."
        componentButton="VER PORTAFOLIO"
      />
      <RightComponent componentTitle="SIGUEME EN:" componentButton="LEER MAS" />
    </div>
  ); 
}

export default Right;
