import "./home.sass"
import Header from "../components/header/index.jsx";
import Section from "../components/section/index.jsx"
import About from "../components/about/index.jsx";
import Skills from "../components/skills/index.jsx";
import Portfolio from "../components/portafolio/index.jsx";
import Testimonials from "../components/testimonials/index.jsx";
import Contact from "../components/contact/contact.jsx";
import Footer from "../components/footer/footer.jsx";

const Index = () => {
  return (
    <div className="home">
      <Header />
      <Section />
      <About />
      <Skills /> 
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;