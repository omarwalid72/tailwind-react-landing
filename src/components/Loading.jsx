import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center 
        bg-gradient-to-br from-gray-900 to-black z-[9999]"
    >
      <motion.div 
        className="w-20 h-20 border-[5px] border-white/20 border-t-white rounded-full"
        animate={{
          rotate: 360,
          transition: {
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-full h-full border-[5px] border-transparent border-t-blue-500 rounded-full"
          animate={{
            rotate: -360,
            transition: {
              duration: 0.5,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loading;