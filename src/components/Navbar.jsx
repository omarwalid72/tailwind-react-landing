import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Frame (4).png";
import Hamburger from "../assets/hamburgerMenu.svg";
import Close from "../assets/close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const menuItems = [
    { name: "Home", link: "#hero" },
    { name: "Companies", link: "#companies" },
    { name: "Achievements", link: "#achievements" },
    { name: "Feedback", link: "#feedback" },
    { name: "Contact", link: "#footer" }
  ];

  const scrollToSection = (e, link) => {
    e.preventDefault();
    const targetElement = document.querySelector(link);
    
    if (targetElement) {
      // Smooth scroll with offset for fixed navbar
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      setToggle(false);
    }
  };

  return (
    <header className="bg-[#009FE3] shadow-lg dark:bg-gray-900 fixed w-full top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <motion.img
            src={Logo}
            alt="Logo"
            className="h-12 w-auto object-contain shadow-md transition-all duration-300 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          {menuItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.link}
              onClick={(e) => scrollToSection(e, item.link)}
              className="text-white text-lg font-medium px-4 py-2 rounded-md transition-all duration-300 hover:bg-white hover:text-[#009FE3] shadow-md"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-4">
          <motion.a
            href="#footer"
            onClick={(e) => scrollToSection(e, '#footer')}
            className="px-6 py-2 text-sm font-medium text-white bg-[#007bbd] rounded-lg hover:bg-[#005f96] transition-all shadow-md"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setToggle(!toggle)}
          className="lg:hidden focus:outline-none z-50 p-2 rounded-md bg-white shadow-md"
        >
          <motion.img
            src={toggle ? Close : Hamburger}
            alt="Menu"
            className="h-8 w-8 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </button>
      </nav>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-4 right-4 bg-white shadow-xl rounded-lg z-40 p-6"
          >
            <div className="flex flex-col items-center space-y-4">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  onClick={(e) => scrollToSection(e, item.link)}
                  className="text-[#009FE3] text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[#009FE3] hover:text-white shadow-md w-full text-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#footer"
                onClick={(e) => scrollToSection(e, '#footer')}
                className="px-6 py-2 text-sm font-medium text-[#009FE3] bg-white rounded-lg hover:bg-gray-100 transition-all shadow-lg border border-[#009FE3] w-full text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Log in
              </motion.a>
              <motion.a
                href="#footer"
                onClick={(e) => scrollToSection(e, '#footer')}
                className="px-6 py-2 text-sm font-medium text-white bg-[#007bbd] rounded-lg hover:bg-[#005f96] transition-all shadow-md w-full text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;