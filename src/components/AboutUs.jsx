import React, { memo, useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { FaLightbulb, FaUsers, FaCogs, FaChartLine } from "react-icons/fa";
import bg from "../assets/blurry-gradient-haikei.svg";

const aboutDetails = [
  {
    icon: FaLightbulb,
    title: "Innovation",
    description: "We leverage cutting-edge technology to create scalable solutions.",
    color: "bg-blue-600",
  },
  {
    icon: FaUsers,
    title: "Teamwork",
    description: "Collaboration is at the heart of everything we do.",
    color: "bg-emerald-600",
  },
  {
    icon: FaCogs,
    title: "Expertise",
    description: "Our skilled professionals bring years of experience in development.",
    color: "bg-amber-600",
  },
  {
    icon: FaChartLine,
    title: "Growth",
    description: "We help businesses scale and reach new heights.",
    color: "bg-rose-600",
  },
];

const FeatureCard = memo(({ item }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center p-5 bg-white/90 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 w-full text-center"
    >
      <div className={`p-3 rounded-full ${item.color} text-white text-2xl`}>
        <item.icon />
      </div>
      <h2 className="text-lg font-semibold text-gray-900 mt-3">{item.title}</h2>
      <p className="text-xs text-gray-600 mt-1">{item.description}</p>
    </motion.div>
  );
});

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="w-full flex flex-col items-center justify-center py-12 px-6 relative overflow-hidden"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
    >
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-3">
          About{" "}
          <motion.span
            className="text-blue-700"
            animate={{ color: ["#104b63", "#1976d2", "#104b63"] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Our Company
          </motion.span>
        </h1>
        <p className="text-base text-gray-700 max-w-2xl text-center mx-auto mb-8">
          We specialize in building high-quality mobile apps and websites, helping businesses thrive in the digital world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mx-auto">
          {aboutDetails.map((item, index) => (
            <FeatureCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
