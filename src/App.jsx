import React from "react";
import {
  HeroSection,
  Navbar,
  Companies,
  AboutUs,
  PartnersSection ,
  FeedBack,
  Footer,
} from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Companies />
      <AboutUs/>
      <FeedBack />
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default App;
