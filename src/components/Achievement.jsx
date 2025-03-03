import React from "react";
import Achieve from "../assets/achievement.png";
import { FaGraduationCap, FaPeopleCarry } from "react-icons/fa";
import { AiFillVideoCamera } from "react-icons/ai";
import bg from "../assets/blurry-gradient-haikei.svg";

const achievements = [
  {
    icon: <FaGraduationCap />,
    value: "100 +",
    label: "Instructors",
    color: "text-green-400",
    bg: "bg-green-500/50",
  },
  {
    icon: <AiFillVideoCamera />,
    value: "10,000 +",
    label: "Videos",
    color: "text-cyan-400",
    bg: "bg-cyan-500/50",
  },
  {
    icon: <FaPeopleCarry />,
    value: "3000 +",
    label: "Users",
    color: "text-yellow-400",
    bg: "bg-yellow-500/50",
  },
  {
    icon: <FaGraduationCap />,
    value: "300 +",
    label: "Students",
    color: "text-red-400",
    bg: "bg-red-500/50",
  },
];

const Achievement = () => {
  return (
    <section
      id="achievements"
      className="w-full text-white py-16 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {" "}
      <div className="md:max-w-[1100px] mx-auto grid md:grid-cols-2 max-w-[400px] items-center">
        {/* Left Section - Text and Stats */}
        <div className="flex flex-col justify-start gap-6">
          <h1 className="md:leading-[42px] text-4xl font-bold">
            Our{" "}
            <span className="text-[#104b63] font-bold drop-shadow-lg">
              Achievements
            </span>
          </h1>
          <p className="text-[#104b63] text-lg">
            Leading companies use our courses to help their employees level up
            their skills.
          </p>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className={`flex items-center p-4 rounded-xl shadow-lg transition-transform transform hover:scale-105 ${item.bg}`}
              >
                <div
                  className={`p-4 rounded-xl shadow-lg ${item.color} bg-opacity-20`}
                >
                  {React.cloneElement(item.icon, {
                    size: 30,
                    className: `drop-shadow-lg`,
                  })}
                </div>
                <div className="px-3">
                  <h1 className="text-3xl font-bold">{item.value}</h1>
                  <p className="text-[#104b63]">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center items-center">
          <img
            src={Achieve}
            alt="hero"
            className="w-full max-w-xs md:max-w-md drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievement;
