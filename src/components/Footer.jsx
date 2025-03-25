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
      const offset = 80;
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
    { name: "About Us", link: "#about-us" },
    { name: "Feedback", link: "#feedback" },
  ];

  const socialLinks = [
    { icon: FaFacebook, link: "https://www.facebook.com/AiwaApp", color: "text-blue-600" },
    { icon: FaXTwitter, link: "https://twitter.com/AiwaGroup_", color: "text-sky-500" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/aiwa-group-159164273/", color: "text-blue-800" },
    { icon: FaInstagram, link: "https://www.instagram.com/aiwagroup_/", color: "text-pink-600" },
    { icon: FaTiktok, link: "https://www.tiktok.com/@aiwa_group", color: "text-black" },
  ];

  const appStoreLinks = [
    { icon: FaApple, link: "https://apps.apple.com/eg/app/aiwa-app/id1555210946", color: "bg-black" },
    { icon: FaGooglePlay, link: "https://play.google.com/store/apps/details?id=com.aiwagroup.aiwa", color: "bg-green-600" },
  ];

  return (
    <section
  id="footer"
  className="w-full min-h-[400px] md:min-h-[500px] pt-16 px-6 bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden"
>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#009FE3] opacity-20 blur-[80px] rounded-full translate-x-1/2 translate-y-1/2 animate-pulse"></div>

  {/* Main content */}
  <div className="relative z-10 max-w-[1100px] mx-auto w-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 md:gap-16">
    
    {/* Contact Section */}
    <div className="w-full md:w-1/2 space-y-4">
      <h3 className="text-2xl font-bold">Contact Us</h3>
      <p className="text-gray-300">Call: (+201) 111990210</p>
      <p className="text-gray-300">
        We develop mobile apps and websites, empowering businesses with AI solutions.
      </p>
      <p className="text-gray-300">Email: info@aiwagroup.org</p>

      {/* App Store Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-4">
        {appStoreLinks.map((app, index) => (
          <a
            key={index}
            href={app.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-white shadow-md transition-all cursor-pointer ${app.color} hover:opacity-90`}
          >
            <app.icon className="w-5 h-5" />
            {app.icon === FaApple ? "App Store" : "Google Play"}
          </a>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex justify-center md:justify-start gap-4 mt-6">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-all cursor-pointer ${social.color}`}
          >
            <social.icon size={22} />
          </a>
        ))}
      </div>
    </div>

    {/* Explore Section */}
    <div className="w-full md:w-1/2">
      <h3 className="text-2xl font-bold mb-4">Explore</h3>
      <ul className="space-y-3 text-gray-300">
        {exploreLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.link}
              onClick={(e) => scrollToSection(e, link.link)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="relative z-10 text-center text-gray-400 text-sm py-4 border-t border-gray-700 mt-8">
    © {new Date().getFullYear()} Aiwa Group. All rights reserved.
  </div>
</section>
  );
};

export default Footer;