export const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: "easeOut", 
        delay: custom * 0.1 
      }
    })
  };