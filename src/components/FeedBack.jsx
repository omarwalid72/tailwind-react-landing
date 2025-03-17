import React, { useEffect } from "react";
import Slider from "react-slick";
import FeedBackCard from "./FeedBackCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bg from "../assets/blurry-gradient-haikei.svg";
import avatar from '../assets/avatar.png';
import user2 from "../assets/sigmund-jzz_3jWMzHA-unsplash.jpg";
import user3 from "../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg";
import user4 from "../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg";


const FeedBack = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const feedbackData = [
    {
      name: "Ahmed Khaled",
      role: "Software Engineer",
      feedback:
        "Amazing service! The platform's payment integration was seamless and secure.",
      image: user3,  // Added image here
      rating: 5,
    },
    {
      name: "Sarah Ali",
      role: "Project Manager",
      feedback:
        "The dashboard analytics have transformed how we track our payments.",
      image: user2,  // Added image here
      rating: 5,
    },
    {
      name: "Omar Hassan",
      role: "Freelancer",
      feedback:
        "Their support team is exceptional. Always there when you need them.",
      image: user4,  // Added image here
      rating: 4,
    },
    {
      name: "Nour Mohamed",
      role: "Business Owner",
      feedback: "The best payment solution we've used. Highly recommended!",
      image: avatar,  // Using avatar as a fallback
      rating: 5,
    },
  ];


  return (
    <section
      id="feedback"
      ref={ref}
      className="relative w-full text-white py-16 px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-y-[-1] z-[-1]"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
              },
            }}
            className="inline-block px-4 py-1 mb-4 bg-blue-50 rounded-full transform hover:scale-105 transition-transform"
          >
            <span className="text-[#009FE3] font-semibold">Testimonials</span>
          </motion.div>

          <motion.div initial="hidden" animate={controls}>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
                },
              }}
              className="text-4xl md:text-5xl font-bold text-black mb-6"
            >
              What Our <span className="text-[#104b63] inline-block">Clients Say</span>
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut", delay: 0.6 },
              },
            }}
            className="text-lg text-gray-100 max-w-2xl mx-auto"
          >
            Discover why businesses trust our payment solutions for their success.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          className="max-w-6xl mx-auto"
        >
          <Slider {...settings} className="testimonials-slider">
            {feedbackData.map((feedback, index) => (
              <div key={index} className="px-4">
                <FeedBackCard {...feedback} />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      <style jsx>{`
        .testimonials-slider .slick-dots li button:before {
          color: #009fe3;
        }
        .testimonials-slider .slick-dots li.slick-active button:before {
          color: #009fe3;
        }
      `}</style>
    </section>
  );
};

export default FeedBack;
