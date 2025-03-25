import React, { memo } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CompanyCard = memo(({ app, index }) => {
  return (
    <div
      viewport={{ once: true, amount: 0.2 }}
      className={`relative overflow-hidden rounded-2xl shadow-lg ${app.bgColor} transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 will-change-transform`}
    >
      <div className="relative z-10 p-6">
        <CardHeader app={app} />
        <CardImage app={app} />
        <CardDescription app={app} />
        <CardFeatures app={app} index={index} />
        <CardActions app={app} />
      </div>
    </div>
  );
});

const CardHeader = memo(({ app }) => (
  <div className="flex items-center mb-4">
    <div
      className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-20 rounded-full w-20 h-20 -z-10`}
    ></div>
    <div className="mr-3">{app.icon}</div>
    <h3 className="text-2xl font-bold text-gray-800">{app.title}</h3>
  </div>
));

const CardImage = memo(({ app }) => (
  <motion.div className="mb-4">
    <LazyLoadImage
      src={app.image}
      alt={app.title}
      effect="blur"
      width="400"
      height="240"
      className="w-full h-36 object-cover rounded-xl shadow-md"
    />
  </motion.div>
));

const CardDescription = memo(({ app }) => (
  <p className="text-sm text-gray-600 mb-4">{app.description}</p>
));

const CardFeatures = memo(({ app, index }) => (
  <div className="space-y-2 mb-4">
    {app.features.map((feature, idx) => (
      <FeatureItem
        key={idx}
        feature={feature}
        index={index}
        featureIndex={idx}
      />
    ))}
  </div>
));

const FeatureItem = memo(({ feature}) => (
  <div
    className="flex items-center text-gray-700 text-sm"
  >
    <CheckIcon />
    {feature}
  </div>
));

const CheckIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-2 text-[#009FE3]"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
));

const CardActions = memo(({ app }) => (
  <>
    {app.link && <WebsiteLink link={app.link} />}
    {app.buttons && <AppStoreButtons buttons={app.buttons} />}
  </>
));

const WebsiteLink = memo(({ link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 font-bold inline-block"
    whileHover={{ scale: 1.05, x: 5 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    Visit Website
  </motion.a>
));

const AppStoreButtons = memo(({ buttons }) => (
  <div className="flex space-x-4 mt-4">
    {buttons.map((button, idx) => (
      <motion.a
        key={idx}
        href={button.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {button.icon} <span className="ml-2">{button.label}</span>
      </motion.a>
    ))}
  </div>
));

export default CompanyCard;
