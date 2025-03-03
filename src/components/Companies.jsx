import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaRocket, FaUserFriends, FaCogs } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt className="text-5xl text-[#009FE3]" />,
    title: "High Security",
    description:
      "We use advanced encryption to protect your data and transactions.",
    gradient: "from-blue-400 to-blue-300",
  },
  {
    icon: <FaRocket className="text-5xl text-[#009FE3]" />,
    title: "Fast Performance",
    description: "Enjoy a seamless and lightning-fast payment experience.",
    gradient: "from-cyan-400 to-cyan-300",
  },
  {
    icon: <FaUserFriends className="text-5xl text-[#009FE3]" />,
    title: "Dedicated Support",
    description: "Our support team is available 24/7 to assist you anytime.",
    gradient: "from-sky-400 to-sky-300",
  },
  {
    icon: <FaCogs className="text-5xl text-[#009FE3]" />,
    title: "Flexible Management",
    description: "Gain full control over your payments and account settings.",
    gradient: "from-indigo-400 to-indigo-300",
  },
];

const Companies = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="companies" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 mb-4 bg-blue-50 rounded-full"
          >
            <span className="text-[#009FE3] font-semibold">Why Choose Us?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-black mb-6"
          >
            Powerful Features for
            <span className="text-[#104b63]"> Modern Businesses</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We provide an all-in-one solution to simplify your payment process
            with cutting-edge technology.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // 👈 Allows re-triggering
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100`}
            >
              <div className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full w-16 h-16 -z-10`}
                ></div>
                <div className="flex items-center justify-center w-16 h-16 mb-6">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <motion.div whileHover={{ scale: 1.1 }} className="mt-6">
                <a
                  href="#"
                  className="text-[#009FE3] font-semibold flex items-center"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Companies;
