import CanvasBG from "./components/CanvasBG.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import FeaturedML from "./components/FeaturedML.jsx";
import Carousel from "./components/Carousel.jsx";
import Capabilities from "./components/Capabilities.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <div className="app">
      <CanvasBG />
      <Navbar />

      <Hero />
      <FeaturedML />

      {/* Breaker wrapper – no section, no main */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Carousel />
      </div>

      <Capabilities />
      <Contact />
    </div>
  );
}
