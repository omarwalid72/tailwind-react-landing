import React, { Suspense, lazy, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Loading from "./components/Loading"; 
import "nprogress/nprogress.css";

const Companies = lazy(() => import("./components/Companies"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const FeedBack = lazy(() => import("./components/FeedBack"));
const PartnersSection = lazy(() => import("./components/PartnersSection"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // تأخير لمدة 2-3 ثوانٍ قبل عرض المحتوى
    const delay = Math.floor(Math.random() * 1000) + 2000; 
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <Companies />
          <AboutUs />
          <PartnersSection />
          <FeedBack />
          <Footer />
          
        </>
      )}
    </div>
  );
}

export default App;
