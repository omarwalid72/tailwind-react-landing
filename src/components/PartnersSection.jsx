import React from "react";
import { motion } from "framer-motion";
import bmb from "../assets/bmp-logo.png";
import geidea from "../assets/geidea.svg";
import ABC from "../assets/BankABClogo-Ar.png";
import Utrust from "../assets/UTrust_Logo.png";
import minstry from "../assets/وزارة_الاتصالات_وتكنولوجيا_المعلومات.png";

const partners = [
  { name: "Banque Misr", logo: bmb, link: "https://www.banquemisr.com" }, // Add links
  { name: "Geidea", logo: geidea, link: "https://www.geidea.net" },
  { name: "ABC", logo: ABC, link: "https://www.bank-abc.com/ar" },
  { name: "Utrust", logo: Utrust, link: "https://www.utrust-eg.com/" },
  {
    name: "Ministry of Communication",
    logo: minstry,
    link: "https://mcit.gov.eg/",
  },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-gray-50"> {/* Increased padding, lighter background */}
      <div className="container mx-auto text-center px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" // Responsive text size
        >
          Partnering with <motion.span className="text-[#104b63]"
          animate={{ 
            color: ["#104b63", "#1976d2", "#104b63"],
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "reverse" 
          }}>Industry Leaders</motion.span>
        </motion.h2> {/* Changed title text and color */}

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"> {/* Added margin bottom */}
          Collaborating with key players to drive innovation and deliver exceptional services. {/* Shortened text */}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"> {/* Adjusted grid and gap */}
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.link} // Use href for links
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Subtle hover effect
              className="bg-white rounded-lg shadow-lg transition-shadow duration-300 flex items-center justify-center p-6" // Improved styling
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 max-w-full object-contain" // Responsive image size
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;