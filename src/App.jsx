import React from "react";
import {
  HeroSection,
  Navbar,
  Companies,
  Achievement,
  Categories,
  FeedBack,
  CTA,
  Footer,
} from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Companies />
      <Achievement />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default App;
