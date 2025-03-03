import React from 'react'
import { 
  FaFacebook, 
  FaLinkedin, 
  FaInstagram, 
  FaTwitter, 
  FaTiktok 
} from 'react-icons/fa'
import Logo from '../assets/logo.svg'

const Footer = () => {
  const scrollToSection = (e, link) => {
    e.preventDefault();
    const targetElement = document.querySelector(link);
    if (targetElement) {
      const offset = 80; 
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const exploreLinks = [
    { name: "Home", link: "#hero" },
    { name: "Companies", link: "#companies" },
    { name: "Achievements", link: "#achievements" },
    { name: "Feedback", link: "#feedback" },
  ];

  const socialLinks = [
    { 
      icon: FaFacebook, 
      link: "https://www.facebook.com/AiwaApp", 
      color: "text-blue-600 hover:text-blue-700"
    },
    { 
      icon: FaTwitter, 
      link: "https://twitter.com/AiwaGroup_", 
      color: "text-sky-500 hover:text-sky-600"
    },
    { 
      icon: FaLinkedin, 
      link: "https://www.linkedin.com/company/aiwa-group", 
      color: "text-blue-800 hover:text-blue-900"
    },
    { 
      icon: FaInstagram, 
      link: "https://www.instagram.com/aiwagroup_/", 
      color: "text-pink-600 hover:text-pink-700"
    },
    { 
      icon: FaTiktok, 
      link: "https://www.tiktok.com/@aiwa_group", 
      color: "text-black hover:text-gray-800"
    }
  ];

  return (
    <section id='footer' className='w-full py-24 p-4 relative bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden'>
      {/* Floating Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#009FE3] opacity-30 blur-[100px] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#009FE3] opacity-20 blur-[100px] rounded-full transform translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      
      {/* Main content */}
      <div className='relative z-10 md:max-w-[1100px] m-auto grid md:grid-cols-3 max-[768px]:md:grid-cols-6 gap-8 max-w-[400px]'>
            <div className='col-span-1'>
                <img src={Logo} alt='logo-footer' className='h-[25px] brightness-0 invert'/>
                <h3 className="font-bold text-2xl mt-10 text-white">Contact us</h3>
                <h3 className="py-2 text-gray-300">call: 647 68658 86658</h3>
                <h3 className="py-2 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officia.</h3>
                <h3 className="py-2 text-white">Email: example@gmail.com</h3>

                <div className="flex gap-4 py-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl bg-sky-800/30 hover:bg-sky-700/50 transition-all cursor-pointer text-white ${social.color}`}
                    >
                      <social.icon size={25}/>
                    </a>
                  ))}
                </div>
            </div>    

            <div className='col-span-1'>
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

            <div className='col-span-1'>
                <h3 className="font-bold text-2xl mt-10 text-white">Categories</h3>
                <ul className="py-3 text-gray-300">
                    <li className="py-2 hover:text-white transition-colors cursor-pointer">Design</li>
                    <li className="py-2 hover:text-white transition-colors cursor-pointer">Development</li>
                    <li className="py-2 hover:text-white transition-colors cursor-pointer">Marketing</li>
                    <li className="py-2 hover:text-white transition-colors cursor-pointer">Finance</li>
                    <li className="py-2 hover:text-white transition-colors cursor-pointer">Music</li>
                    <li className="py-2 hover:text-white transition-colors cursor-pointer">Photography</li>
                </ul>
            </div>

            <div className='col-span-2'>
                <h3 className="font-bold text-2xl mt-10 text-white">Subscribe</h3>
                <h3 className="py-2 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officia.</h3>
                <form className='flex justify-content-between items-center gap-2'>
                    <input 
                        type="text" 
                        className="my-2 w-full px-5 py-3 rounded-lg border border-sky-700/50 
                                 bg-sky-900/30 text-white placeholder:text-gray-400 
                                 focus:outline-none focus:border-sky-600 transition-all" 
                        placeholder='Enter your email address here'
                    />
                    <button className='my-2 px-5 py-3 bg-sky-600 hover:bg-sky-700 
                                     text-white rounded-lg transition-colors'>
                        Subscribe
                    </button>
                </form>
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
  )
}

export default Footer