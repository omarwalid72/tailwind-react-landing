import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const scrollToSection = (e, link) => {
    e.preventDefault();
    const targetElement = document.querySelector(link);
    if (targetElement) {
      const offset = 80; // Adjust offset as needed
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const exploreLinks = [
    { name: "Home", link: "#hero" },
    { name: "Companies", link: "#companies" },
    { name: "AboutUs", link: "#about-us" },
    { name: "Feedback", link: "#feedback" },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/AiwaApp",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      icon: FaXTwitter,
      link: "https://twitter.com/AiwaGroup_",
      color: "text-sky-500 hover:text-sky-600",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/aiwa-group-159164273/",
      color: "text-blue-800 hover:text-blue-900",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/aiwagroup_/",
      color: "text-pink-600 hover:text-pink-700",
    },
    {
      icon: FaTiktok,
      link: "https://www.tiktok.com/@aiwa_group",
      color: "text-black hover:text-gray-800",
    },
  ];

  const appStoreLinks = [
    {
      icon: FaApple,
      link: "https://apps.apple.com/eg/app/aiwa-app/id1555210946",
      color: "text-white bg-black hover:bg-gray-800",
    },
    {
      icon: FaGooglePlay,
      link: "https://play.google.com/store/apps/details?id=com.aiwagroup.aiwa",
      color: "text-white bg-green-600 hover:bg-green-700",
    },
  ];

  return (
    <section
      id="footer"
      className="w-full py-24 p-4 relative bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Floating Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#009FE3] opacity-30 blur-[100px] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#009FE3] opacity-20 blur-[100px] rounded-full transform translate-x-1/2 translate-y-1/2 animate-pulse"></div>

      {/* Main content */}
      <div className="relative z-10 md:max-w-[1100px] m-auto grid md:grid-cols-2 max-[768px]:md:grid-cols-6 gap-8 max-w-[400px]">
        <div className="col-span-1">
          <h3 className="font-bold text-2xl mt-10 text-white">Contact us</h3>
          <h3 className="py-2 text-gray-300">call: (+201) 111990210</h3>
          <h3 className="py-2 text-gray-300">
            We develop mobile apps and websites, empowering businesses with AI
            solutions.
          </h3>
          <h3 className="py-2 text-white">Email: info@aiwagroup.org</h3>

          {/* App Store and Google Play Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {appStoreLinks.map((app, index) => (
              <a
                key={index}
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-6 py-3 rounded-xl shadow-lg transition-all cursor-pointer ${app.color}`}
              >
                <app.icon className="mr-2 w-6 h-6" />
                {app.icon === FaApple ? "App Store" : "Google Play"}
              </a>
            ))}
          </div>


          <div className="flex gap-4 py-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-xl bg-sky-800/30 hover:bg-sky-700/50 transition-all cursor-pointer text-white ${social.color}`}
              >
                <social.icon size={25} />
              </a>
            ))}
          </div>
        </div>

        <div className="col-span-1">
          <h3 className="font-bold text-2xl mt-10 text-white">Explore</h3>
          <ul className="py-3 text-gray-300">
            {exploreLinks.map((link, index) => (
              <li
                key={index}
                className="py-2 hover:text-white transition-colors cursor-pointer"
              >
                <a
                  href={link.link}
                  onClick={(e) => scrollToSection(e, link.link)}
                  className="block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Optional: Add custom animation keyframes */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
};

export default Footer;