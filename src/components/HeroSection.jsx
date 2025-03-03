import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import slid2 from "../assets/luca-bravo-XJXWbfSo2f0-unsplash.jpg";
import slid1 from "../assets/AI.jpg";
import slid3 from "../assets/alexander-shatov-mr4JG4SYOF8-unsplash.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [slid1, slid2, slid3];

  const slideContent = [
    {
      title: "Transform Your Business",
      highlight1: "to  Digital Solutions",
      highlight2: " with Modern Business",
      description:
        "AIWA empowers businesses with cutting-edge digital solutions, combining technology and modern strategies to drive growth and success.",
    },
    {
      title: "Smart Solutions ,",
      highlight2: " Powerful Software",
      description:
        "AIWA delivers innovative web and mobile applications with top-tier development expertise.",
    },
    {
      title: "Marketing Strategies",
      highlight1: "for Business Growth",
      description:
        " AIWA enhances brand visibility with expert digital marketing and branding solutions.",
    },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/AiwaApp?mibextid=ZbWKwL",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      icon: FaTwitter,
      link: "https://x.com/AiwaGroup_",
      color: "text-sky-500 hover:text-sky-600",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/aiwa-group-159164273/",
      color: "text-blue-800 hover:text-blue-900",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/aiwagroup_/",
      color: "text-pink-600 hover:text-pink-700",
    },
    {
      icon: FaTiktok,
      link: "https://www.tiktok.com/@aiwa_group",
      color: "text-black hover:text-gray-800",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-gray-800 dark:to-gray-900 h-screen flex items-center justify-center relative overflow-hidden border-b-2 border-double border-[#009FE3]"
    >
      {/* Floating Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#009FE3] opacity-30 blur-[100px] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#009FE3] opacity-20 blur-[100px] rounded-full transform translate-x-1/2 translate-y-1/2 animate-pulse"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left pl-0 lg:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  {slideContent[currentSlide].title}{" "}
                  <span className="text-[#00ccff]">
                    {slideContent[currentSlide].highlight1}
                  </span>{" "}
                  <br />{" "}
                  <span className="text-[#00ccff]">
                    {slideContent[currentSlide].highlight2}
                  </span>
                </h1>

                <motion.p className="text-base lg:text-lg text-gray-200 dark:text-gray-300 mb-6 max-w-xl">
                  {slideContent[currentSlide].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#footer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-[#009FE3] bg-white rounded-xl shadow-lg hover:bg-gray-100 transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("footer")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Us
                <AiOutlineArrowRight className="ml-2 w-4 h-4" />
              </motion.a>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} transition-all duration-300`}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={30} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Image Slider */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-xl">
              {/* Floating Blobs for Image */}
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#00ccff] opacity-30 blur-[50px] rounded-full animate-pulse"></div>

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={images[currentSlide]}
                    alt="Hero Image"
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    className="w-full h-[500px] object-cover"
                    style={{
                      filter: "brightness(1.1) contrast(1.1)",
                    }}
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
