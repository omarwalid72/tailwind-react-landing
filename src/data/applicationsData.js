import nardi from "../assets/Group (1).webp";
import pe2pia from "../assets/pe2pia.webp";
import aiwa from "../assets/Group1000002729_11zon.png";

export const applications = [
  {
    image: pe2pia,
    title: "Pe2pia",
    description: "A Social Network Dedicated to Animal Lovers and Adoption",
    features: [
      "Animal Adoption Platform",
      "Community Connections",
      "Rescue Stories",
      "Veterinary Resources",
    ],
    link: "http://pe2pia.com/",

    gradient: "from-yellow-600 to-yellow-400",
    bgColor: "bg-yellow-50",
  },
  {
    image: aiwa,
    title: "Aiwa",
    description:
      "An all-in-one platform to connect users with service providers efficiently and effortlessly.",
    features: [
      "Book Services Instantly",
      "Trusted Professionals",
      "Secure Transactions",
      "Seamless User Experience",
    ],
    buttons: [
      {
        label: "App Store",
        link: "https://apps.apple.com/eg/app/aiwa-app/id1555210946",
      },
      {
        label: "Google Play",
        link: "https://play.google.com/store/apps/details?id=com.aiwagroup.aiwa",
      },
    ],
    gradient: "from-blue-400 to-blue-300",
    bgColor: "bg-blue-50",
  },
  {
    image: nardi,

    title: "Nardi",
    description:
      "Aiwa marketed Nardi, a leading electrical appliances company, with modern solutions.",
    features: [
      "SEO for Nardi's online visibility",
      "Social media campaigns for Nardi's growth",
      "Branding strategies for Nardi's identity",
      "Data-driven marketing for Nardi's success",
    ],
    link: "https://nardiegypt.com/",
    gradient: "from-yellow-400 to-yellow-200",
    bgColor: "bg-orange-100",
  },
];
