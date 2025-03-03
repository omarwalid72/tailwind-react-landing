import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import avatar from '../assets/avatar.png';

const FeedBackCard = ({ name, role, feedback, image, rating = 5 }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 my-4 mx-2 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full -mr-16 -mt-16 z-0" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#009FE3] opacity-10 rounded-full" />
              <img 
                src={image || avatar} 
                alt={name}
                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                onError={(e) => {
                  e.target.src = avatar; // Fallback to avatar if image fails to load
                }}
              />
            </motion.div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800">{name || "Jenny Wilson"}</h3>
              <p className="text-[#009FE3] font-medium">{role || "UI/UX Designer"}</p>
            </div>
          </div>

          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 12 }}
            className="text-[#009FE3] opacity-20"
          >
            <FaQuoteRight size={24} />
          </motion.div>
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FaStar className="text-yellow-400" />
            </motion.div>
          ))}
        </div>

        {/* Feedback Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-600 leading-relaxed">
            {feedback || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium distinctio excepturi dolor, nihil unde exercitationem eligendi sit quam nemo cumque."}
          </p>
        </motion.div>

        {/* Bottom Decoration */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#009FE3] to-transparent opacity-10" />
      </div>
    </motion.div>
  );
};

export default FeedBackCard;