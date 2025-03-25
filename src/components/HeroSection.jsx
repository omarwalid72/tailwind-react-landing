import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaApple, FaGooglePlay } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Import optimized images
import optimizedSlid1 from "../assets/AI.webp";
import optimizedSlid2 from "../assets/luca-bravo-XJXWbfSo2f0-unsplash.webp";
import optimizedSlid3 from "../assets/alexander-shatov-mr4JG4SYOF8-unsplash.webp";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [optimizedSlid1, optimizedSlid2, optimizedSlid3];

  // Content for each slide
  const slideContent = [
    {
      title: "Transform Your Business",
      highlight1: "to Digital Solutions",
      description: "AIWA provides digital solutions, leveraging technology and strategies for growth.",
    },
    {
      title: "Smart Solutions,",
      highlight2: " Powerful Software",
      description: "AIWA delivers innovative web and mobile applications with top-tier development expertise.",
    },
    {
      title: "Marketing Strategies",
      highlight1: "for Business Growth",
      description: "AIWA enhances brand visibility with expert digital marketing and branding solutions.",
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, link: "https://www.facebook.com/AiwaApp?mibextid=ZbWKwL", color: "text-blue-600 hover:text-blue-700" },
    { icon: FaXTwitter, link: "https://x.com/AiwaGroup_", color: "text-black hover:text-gray-800" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/aiwa-group-159164273/", color: "text-blue-800 hover:text-blue-900" },
    { icon: FaInstagram, link: "https://www.instagram.com/aiwagroup_/", color: "text-pink-600 hover:text-pink-700" },
    { icon: FaTiktok, link: "https://www.tiktok.com/@aiwa_group", color: "text-black hover:text-gray-800" },
  ];

  // Optimize slide change with useCallback
  const handleSlideChange = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Simplified interval management
  useEffect(() => {
    const intervalId = setInterval(handleSlideChange, 5000);
    return () => clearInterval(intervalId);
  }, [handleSlideChange]);

  // Simplified entrance animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      id="hero" 
      className="bg-gradient-to-br from-gray-800 dark:to-gray-900 min-h-screen flex items-center justify-center relative overflow-hidden px-6 lg:px-16 pt-20"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Side (Text & Buttons) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 w-full lg:w-1/2"
        >
          {/* Animated Text with Reduced Complexity */}
          <div className="relative w-full" style={{ height: "150px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="absolute top-0 left-0 w-full"
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  {slideContent[currentSlide].title}{" "}
                  <span className="text-[#00ccff]">
                    {slideContent[currentSlide].highlight1 || slideContent[currentSlide].highlight2}
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 dark:text-gray-400 leading-relaxed mb-6">
                  {slideContent[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* App Download Section */}
          <motion.div 
            variants={itemVariants}
            className="w-full pt-6 md:pt-8 mt-4 md:mt-6"
          >
            <div className="text-white text-base md:text-lg font-semibold mb-4 md:mb-5 flex items-center justify-center lg:justify-start">
              <span className="mr-2">Try Our App</span>
              <div className="inline-block">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>

            {/* App Store & Google Play Buttons */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-8 md:mb-10 max-w-xs sm:max-w-none mx-auto sm:mx-0"
            >
              {/* App Store Button */}
              <a
                href="https://apps.apple.com/eg/app/aiwa-app/id1555210946"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 md:py-3.5 bg-black text-white rounded-xl shadow-lg hover:bg-gray-800 transition-all"
              >
                <FaApple className="mr-2 w-5 h-5 md:w-6 md:h-6" />
                <span className="text-sm md:text-base font-medium">App Store</span>
              </a>

              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.aiwagroup.aiwa"
                target="_blank"
                rel="noopener noreferrer"
               
                className="flex items-center justify-center px-6 py-3 md:py-3.5 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition-all"
              >
                <FaGooglePlay className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base font-medium">Google Play</span>
              </a>
            </motion.div>

            {/* Social Media Links */}
            <motion.div 
              variants={itemVariants}
              className="mt-6 md:mt-8 pt-2 md:pt-0 border-t md:border-t-0 border-gray-700/30"
            >
              <p className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4 text-center lg:text-left font-medium">
                Connect With Us
              </p>
              
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 md:p-3.5 rounded-lg md:rounded-xl bg-sky-800/30 hover:bg-sky-700/50 transition-all cursor-pointer text-white ${social.color}`}
                  >
                    <social.icon size={18} className="md:w-5 md:h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side (Image) */}
        <div className="hidden lg:flex justify-center w-full lg:w-1/2">
          <div className="relative w-full max-w-xl">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={images[currentSlide]}
                  alt="Hero Image"
                  width={1400} 
                  height={700} 
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;