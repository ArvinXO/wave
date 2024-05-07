import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Airdrops from "./components/Airdrops";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import AuroraBackground from "./components/design/Aurora";
import TracingBeam from "./components/design/tracing_beam";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <TracingBeam>
          <AuroraBackground />
          <Hero />
          <Benefits />
          <Collaboration />
          <Services />
          <Airdrops />
          <Roadmap />
          <Footer />
        </TracingBeam>
      </div>
    </>
  );
};

export default App;
