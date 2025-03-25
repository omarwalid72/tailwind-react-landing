import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Frame.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);


  useEffect(() => {
    const img = new Image();
    img.src = Logo;
    img.onload = () => setIsLogoLoaded(true);
  }, []);

  const menuItems = [
    { name: "Home", link: "#hero" },
    { name: "Companies", link: "#companies" },
    { name: "About Us", link: "#about-us" },
    { name: "Feedback", link: "#feedback" },
    { name: "Contact", link: "#footer" },
  ];

  const scrollToSection = (e, link) => {
    e.preventDefault();
    const targetElement = document.querySelector(link);

    if (!targetElement) {
      console.error("Section not found:", link);
      return;
    }

    const offset = 80; // Adjust based on navbar height
    const elementPosition =
      targetElement.getBoundingClientRect().top +
      document.documentElement.scrollTop;

    document.documentElement.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });

    setToggle(false); // Close menu on click
  };

  return (
    <header className="bg-[#009FE3] shadow-lg dark:bg-gray-900 fixed w-full top-0 z-50">
      <div className="mx-auto px-6 lg:px-16">
        <nav className="flex items-center justify-between py-4">
          
        <div 
            onClick={(e) => scrollToSection(e, "#hero")}
            className="cursor-pointer flex items-center justify-center h-12 w-32 relative"
            role="button"
            tabIndex={0}
            aria-label="Go to home page"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                scrollToSection(e, "#hero");
              }
            }}
          >
            {/* Logo placeholder while loading */}
            {!isLogoLoaded && (
              <div className="h-12 w-28 bg-[#104b63] rounded-lg animate-pulse"></div>
            )}
            
            {/* Actual logo with width/height attributes */}
            <img
              src={Logo}
              alt="Logo"
              width="120"
              height="48"
              className={`h-12 w-auto object-contain shadow-md transition-all duration-300 rounded-lg ${isLogoLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                transition: 'opacity 0.3s ease-in-out',
                position: isLogoLoaded ? 'static' : 'absolute'
              }}
              onLoad={() => setIsLogoLoaded(true)}
              loading="eager" // Tell browser to load this immediately
            />
          </div>
          

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.link}
                onClick={(e) => scrollToSection(e, item.link)}
                className="relative text-white text-lg font-medium px-4 py-2 rounded-md transition-all duration-300 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[3px] before:bg-white before:transition-all before:duration-300 before:rounded-full before:-translate-x-1/2 hover:before:w-full hover:text-white"
                
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex space-x-4">
            <a
              href="#footer"
              onClick={(e) => scrollToSection(e, "#footer")}
              className="px-6 py-2 text-sm font-medium text-white bg-[#007bbd] rounded-lg hover:bg-[#005f96] transition-all shadow-md hover:shadow-lg"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setToggle(!toggle)}
            className="lg:hidden focus:outline-none z-50 p-2 rounded-md bg-[#104b63] shadow-md"
          >
            {/* Custom Hamburger and Close Icon */}
            <motion.div
              className="w-8 h-8 flex flex-col justify-center items-center"
              animate={toggle ? "open" : "closed"}
            >
              <motion.span
                className="w-6 h-0.5 bg-[#009FE3] rounded-full"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 5 },
                }}
              />
              <motion.span
                className="w-6 h-0.5 bg-[#009FE3] rounded-full mt-1"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
              />
              <motion.span
                className="w-6 h-0.5 bg-[#009FE3] rounded-full mt-1"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -5 },
                }}
              />
            </motion.div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {toggle && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setToggle(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-16 left-4 right-4 bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-lg z-50 p-6"
              style={{
                backdropFilter: "blur(20px)",
                background:
                  "linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
              }}
            >
              <div className="flex flex-col items-center space-y-4">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.link}
                    onClick={(e) => scrollToSection(e, item.link)}
                    className="w-full text-center px-6 py-3 text-lg font-medium text-white relative overflow-hidden rounded-[30px] border-2 border-transparent hover:border-[#009FE3] transition-all duration-300 group"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(0, 123, 189, 0.8), rgba(0, 159, 227, 0.8))",
                      clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)", // Cut-corner design
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-[#009FE3] to-[#007bbd] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                      }}
                    />
                  </motion.a>
                ))}

                <a
                  href="#footer"
                  onClick={(e) => scrollToSection(e, "#footer")}
                  className="w-full text-center px-6 py-3 text-lg font-medium text-white relative overflow-hidden rounded-[30px] border-2 border-transparent hover:border-[#009FE3] transition-all duration-300 group"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#004f7d] to-[#005f96] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
