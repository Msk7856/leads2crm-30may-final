"use client";

import { motion } from "framer-motion";
import {
  FaBuilding,
  FaHotel,
  FaHome,
  FaNetworkWired,
  FaVolumeUp,
  FaLock,
  FaFireExtinguisher,
  FaServer,
} from "react-icons/fa";

const services = [
  {
    title: "Building Management System (BMS)",
    description:
      "Manages and monitors MEP systems such as HVAC, lighting, and security using centralized control systems, optimizing performance and energy efficiency.",
    icon: <FaBuilding className="text-blue text-6xl mb-4 mx-auto group-hover:text-white" />,
  },
  {
    title: "Guest Room Management System (GRMS)",
    description:
      "Manages and controls guest room operations, including lighting, HVAC, and entertainment, providing a customized experience for hotel guests while reducing energy consumption.",
    icon: <FaHotel className="text-blue text-6xl mb-4 mx-auto group-hover:text-white" />,
  },
  {
    title: "Smart Home Automation",
    description:
      "Offers comprehensive smart home solutions, including thermostats, lighting systems, security cameras, and entertainment systems, all controllable via smartphones or tablets.",
    icon: <FaHome className="text-blue text-6xl mb-4 mx-auto group-hover:text-white" />,
  },
  {
    title: "KNX System",
    description:
      "A standardized building automation system that controls and monitors lighting, HVAC, and security, offering scalability and adaptability for various building requirements.",
    icon: <FaNetworkWired className="text-blue text-6xl mb-4 mx-auto group-hover:text-white" />,
  },
  {
    title: "Sound System & AV",
    description:
      "Provides high-quality sound systems and audiovisual solutions for offices, villas, and palaces, ensuring the best possible experience and effectiveness.",
    icon: <FaVolumeUp className="text-blue text-6xl mb-4 mx-auto group-hover:text-white " />,
  },
  {
    title: "Access Control System",
    description:
      "Manages and controls access to buildings or restricted areas using authentication methods like key cards, biometrics, or PINs, enhancing security and protecting sensitive data.",
    icon: <FaLock className="text-blue text-6xl mb-4 mx-auto group-hover:text-white" />,
  },
  {
    title: "Fire Alarm Systems",
    description:
      "Installs fire alarm systems that use visual and aural signaling to warn of potential fire, smoke, or carbon monoxide threats, ensuring safety in residential and commercial structures.",
    icon: <FaFireExtinguisher className="text-blue text-6xl mb-4 mx-auto group-hover:text-white" />,
  },
  {
    title: "Data & IP Systems",
    description:
      "Manages and conveys data across IP networks, including switches, Wi-Fi access points, IP telephones, and CCTV, ensuring reliable and secure communication.",
    icon: <FaServer className="text-blue  text-6xl mb-4 mx-auto group-hover:text-white" />,
  },
];

export default function Service1() {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center text-blue mb-12 mt-10">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-6 rounded-xl shadow-lg cursor-pointer transition duration-300 transform hover:shadow-2xl hover:bg-blue hover:text-white group"
          >
            {service.icon}
            <h3 className="text-2xl font-bold text-center text-blue transition duration-300 group-hover:text-white">
              {service.title}
            </h3>
            <p className="text-center text-blue transition duration-300 group-hover:text-white mt-2">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
