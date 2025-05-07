import "./home.sass"
import Header from "../components/header/index.jsx";
import MainSection from "../components/mainsection/index.jsx";
import About from "../components/about/index.jsx";
import Skills from "../components/skills/index.jsx";
import Portfolio from "../components/portfolio/index.jsx";
import Testimonials from "../components/testimonials/index.jsx";
// import Contact from "../components/contact/index.jsx";
import Footer from "../components/footer/index.jsx";

const Index = () => {
  return (
    <div className="home">
      <Header />
      <MainSection />
      {/* <About />
      <Skills /> 
      <Portfolio />
      <Testimonials /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Index;