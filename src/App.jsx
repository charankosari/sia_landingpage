import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/heroPage";
import StudyMaterialSection from "./components/Universities";
import Experience from "./components/Experience";
import Footer from "./components/footer";
import PricingSection from "./components/PricingSection";
function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="coverage">
        <StudyMaterialSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>

      <Experience />
      <Footer />
    </div>
  );
}

export default App;
