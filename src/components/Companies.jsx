import React from "react";
import { motion } from "framer-motion";
import { FaPaw, FaHandsHelping, FaBullhorn } from "react-icons/fa";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";

import nardi from "../assets/Group (1).webp";
import pe2pia from "../assets/pe2pia.webp";
import aiwa from "../assets/Group1000002729.webp";

const applications = [
  {
    image: pe2pia,
    title: "Pe2pia",
    description: "A Social Network Dedicated to Animal Lovers and Adoption",
    features: [
      "Animal Adoption Platform",
      "Community Connections",
      "Rescue Stories",
      "Veterinary Resources"
    ],
    link: "http://pe2pia.com/",
    icon: <FaPaw className="text-4xl text-[#afa04c]" />,
    gradient: "from-yellow-600 to-yellow-400",
    bgColor: "bg-yellow-50"
  },
  {
    image: aiwa,
    title: "Aiwa",
    description: "An all-in-one platform to connect users with service providers efficiently and effortlessly.",
    features: [
      "Book Services Instantly",
      "Trusted Professionals",
      "Secure Transactions",
      "Seamless User Experience"
    ],
    buttons: [
      { icon: <AiFillApple />, label: "App Store", link: "https://apps.apple.com/eg/app/aiwa-app/id1555210946" },
      { icon: <AiFillAndroid />, label: "Google Play", link: "https://play.google.com/store/apps/details?id=com.aiwagroup.aiwa" }
    ],
    icon: <FaHandsHelping className="text-4xl text-[#2196F3]" />,
    gradient: "from-blue-400 to-blue-300",
    bgColor: "bg-blue-50"
  },
  {
    image: nardi,
    title: "Nardi",
    description: "We established a successful digital market and company, empowering businesses with modern marketing solutions.",
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "Branding & Identity",
      "Data-Driven Strategies"
    ],
    link: "https://nardiegypt.com/",
    icon: <FaBullhorn className="text-4xl text-[#FF9800]" />,
    gradient: "from-yellow-400 to-yellow-200",
    bgColor: "bg-orange-100"
  }
];

const Companies = () => {
  return (
    <motion.section
      id="companies"
      className="py-12 bg-gradient-to-b from-white to-gray-50 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-3 bg-blue-50 rounded-full">
            <span className="text-[#009FE3] font-semibold text-sm">
              Our Innovative Solutions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Transforming <span className="text-[#104b63]">Digital Experiences</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Innovative applications designed to solve real-world challenges and
            connect communities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl shadow-lg ${app.bgColor} transform transition-all duration-300 hover:shadow-xl will-change-transform`}
            >
              <div className="relative z-10 p-6">
                <div className="flex items-center mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-20 rounded-full w-20 h-20 -z-10`}></div>
                  <div className="mr-3">{app.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800">{app.title}</h3>
                </div>
                <div className="mb-4">
                  <img
                    src={app.image}
                    alt={app.title}
                    width="400"
                    height="240"
                    className="w-full h-36 object-cover rounded-xl shadow-md"
                  />
                </div>
                <p className="text-sm text-gray-600 mb-4">{app.description}</p>
                <div className="space-y-2 mb-4">
                  {app.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2 text-[#009FE3]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                {app.link && (
                  <a href={app.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                    Visit Website
                  </a>
                )}
                {app.buttons && (
                  <div className="flex space-x-4 mt-4">
                    {app.buttons.map((button, idx) => (
                      <a key={idx} href={button.link} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        {button.icon} <span className="ml-2">{button.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Companies;
