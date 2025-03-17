import React, { useState, useEffect, useRef } from "react";
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

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  return (
    <section className="bg-gradient-to-br from-gray-800 dark:to-gray-900 h-screen flex items-center justify-center relative overflow-hidden px-6 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Side (Text & Buttons) */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-2xl">
          
          {/* Animated Text */}
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
                <span className="text-[#00ccff]">{slideContent[currentSlide].highlight1}</span>{" "}
                <span className="text-[#00ccff]">{slideContent[currentSlide].highlight2}</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 dark:text-gray-400 leading-relaxed mb-6">
                {slideContent[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Try Our App */}
          <div className="text-white text-lg font-semibold mb-2">
            Try Our App
          </div>

          {/* App Store & Google Play Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="https://apps.apple.com/eg/app/aiwa-app/id1555210946"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl shadow-lg hover:bg-gray-800 transition-all"
            >
              <FaApple className="mr-2 w-6 h-6" />
              App Store
            </motion.a>

            <motion.a
              href="https://play.google.com/store/apps/details?id=com.aiwagroup.aiwa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition-all"
            >
              <FaGooglePlay className="mr-2 w-5 h-5" />
              Google Play
            </motion.a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl bg-sky-800/30 hover:bg-sky-700/50 transition-all cursor-pointer text-white ${social.color}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="hidden lg:flex justify-center">
  <div className="relative w-full max-w-xl">
    <div className="relative overflow-hidden rounded-xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSlide}
          src={images[currentSlide]}
          alt="Hero Image"
          width={1400} 
          height={700} 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
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
