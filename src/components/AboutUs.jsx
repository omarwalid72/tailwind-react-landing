import React from "react";
import CompanyImage from "../assets/Group1000002729.webp";
import { FaLightbulb, FaUsers, FaCogs, FaChartLine } from "react-icons/fa";
import bg from "../assets/blurry-gradient-haikei.svg";

const aboutDetails = [
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description: "We leverage cutting-edge technology to create scalable solutions.",
    color: "text-blue-600",
  },
  {
    icon: <FaUsers />,
    title: "Teamwork",
    description: "Collaboration is at the heart of everything we do.",
    color: "text-emerald-600",
  },
  {
    icon: <FaCogs />,
    title: "Expertise",
    description: "Our skilled professionals bring years of experience in development.",
    color: "text-amber-600",
  },
  {
    icon: <FaChartLine />,
    title: "Growth",
    description: "We help businesses scale and reach new heights.",
    color: "text-rose-600",
  },
];

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="h-screen w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 w-full">
          {/* Left Section - Image */}
          <div className="md:w-1/3 w-full flex justify-center items-center">
          <div className="relative">
            <img
              src={CompanyImage}
              alt="About Us"
              className="w-32 md:w-40 relative rounded-2xl  transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
              srcSet={`${CompanyImage} 1x, ${CompanyImage.replace(".png", "@2x.png")} 2x`}
            />
          </div>
        </div>

          {/* Right Section - Content */}
          <div className="md:w-2/3 w-full flex flex-col gap-7">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                About <span className="text-[#104b63]">Our Company</span>
              </h1>
              <p className="text-base md:text-lg text-gray-700 max-w-2xl leading-relaxed">
                We specialize in building high-quality mobile apps and websites,
                helping businesses thrive in the digital world. Our team is dedicated 
                to delivering tailored solutions.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-5 mt-4">
              {aboutDetails.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-5 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className={`p-2.5 ${item.color}`}>
                    {React.cloneElement(item.icon, { size: 26 })}
                  </div>
                  <div className="ml-3">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-1.5">
                      {item.title}
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;