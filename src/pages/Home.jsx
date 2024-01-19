import "./home.sass"
import Header from "../components/header/index.jsx";
import Section from "../components/section/index.jsx"
import About from "../components/about/index.jsx";
import Skills from "../components/skills/index.jsx";

const Index = () => {
  return (
    <div className="home">
    <Header />
      <Section />
      <About />
      <Skills />
    </div>
  );
};

export default Index;