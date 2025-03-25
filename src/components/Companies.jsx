import React, { memo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import CompanyCard from "./CompanyCard";
import { applications } from "../data/applicationsData";
import { textVariants } from "../utils/animationVariants";

const Companies = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      id="companies"
      className="py-12 bg-gradient-to-b from-white to-gray-50 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <CompanyHeader shouldAnimate={shouldAnimate} />
        <CompanyGrid shouldAnimate={shouldAnimate} />
      </div>
    </motion.section>
  );
};

const CompanyHeader = memo(({ shouldAnimate }) => (
  <div className="text-center mb-12">
    <motion.h2
      className="text-3xl md:text-4xl font-bold text-black mb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      custom={1}
      variants={textVariants}
    >
      Transforming <AnimatedText />
    </motion.h2>

    <motion.p
      className="text-base text-gray-600 max-w-2xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      custom={2}
      variants={textVariants}
    >
      Innovative applications designed to solve real-world challenges and
      connect communities
    </motion.p>
  </div>
));

const AnimatedText = memo(() => (
  <motion.span
    className="text-[#104b63]"
    animate={{
      color: ["#104b63", "#1976d2", "#104b63"],
    }}
    transition={{
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    Digital Experiences
  </motion.span>
));

const CompanyGrid = memo(({ shouldAnimate }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {applications.map((app, index) => (
        <CompanyCard
          key={app.title}
          app={app}
          index={index}
          shouldAnimate={shouldAnimate}
          loading="lazy"
          delay={index * 0.1}
        />
      ))}
    </div>
  );
});

export default Companies;
