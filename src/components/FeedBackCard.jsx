import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import avatar from "../assets/avatar.png";

const FeedBackCard = ({ name, role, feedback, image, rating = 5 }) => {
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 my-4 mx-2 relative overflow-hidden transform transition-all duration-300"
    >
      {/* Decorative Gradient Circle */}
      <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full -mr-10 -mt-10 z-0" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header - Avatar and Name */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative">
              <img
                src={image || avatar}
                alt={name}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white shadow-md"
                onError={(e) => {
                  e.target.src = avatar; 
                }}
              />
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                {name || "Jenny Wilson"}
              </h3>
              <p className="text-sm md:text-base text-[#009FE3] font-medium">
                {role || "UI/UX Designer"}
              </p>
            </div>
          </div>

          {/* Quote Icon */}
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 12 }}
            className="text-[#009FE3] opacity-20"
          >
            <FaQuoteRight size={22} />
          </motion.div>
        </div>

        {/* Star Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <FaStar className="text-yellow-400 text-sm md:text-base" />
            </motion.div>
          ))}
        </div>

        {/* Feedback Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-sm md:text-base leading-relaxed"
        >
          {feedback ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium distinctio excepturi dolor, nihil unde exercitationem eligendi sit quam nemo cumque."}
        </motion.p>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#009FE3] to-transparent opacity-10" />
      </div>
    </motion.div>
  );
};

export default FeedBackCard;
