import "./home.sass"
import Header from "../components/header/index.jsx";
import Section from "../components/section/index.jsx"
import About from "../components/about/index.jsx";
import Skills from "../components/skills/index.jsx";
import Portfolio from "../components/portafolio/index.jsx";

const Index = () => {
  return (
    <div className="home">
      <Header />
      <Section />
      <About />
      <Skills /> 
      <Portfolio />
    </div>
  );
};

export default Index;