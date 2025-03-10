"use client";

import { motion } from "framer-motion";
import {
  FaFilm,
  FaPalette,
  FaMusic,
  FaHeart,
  FaBuilding,
  FaShareSquare,
  FaVideo,
} from "react-icons/fa";

// Motion Variants
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: index * 0.1, duration: 0.5 },
  }),
};

export default function Services() {
  const services = [
    {
      title: "Professional Video Editing",
      description:
        "Crisp, smooth, and engaging edits that enhance the flow and impact of your footage.",
      icon: () => <FaFilm size={50} className="text-red-500" />,
    },
    {
      title: "Color Grading & Enhancement",
      description:
        "We apply cinematic color grading to give your videos a polished, professional look.",
      icon: () => <FaPalette size={50} className="text-green-500" />,
    },
    {
      title: "Audio Editing & Sound Design",
      description:
        "Clear and immersive sound with noise reduction, background music, and professional sound effects.",
      icon: () => <FaMusic size={50} className="text-blue-500" />,
    },
    {
      title: "Wedding & Event Editing",
      description:
        "Beautifully edited wedding and event videos that capture emotions and special moments.",
      icon: () => <FaHeart size={50} className="text-pink-500" />,
    },
    {
      title: "Corporate & Commercial Video Editing",
      description:
        "Professional corporate videos, advertisements, and brand promos with a high production value.",
      icon: () => <FaBuilding size={50} className="text-yellow-500" />,
    },
    {
      title: "Social Media Content Editing",
      description:
        "Short-form, high-impact videos optimized for YouTube, Instagram, TikTok, and other platforms.",
      icon: () => <FaShareSquare size={50} className="text-purple-500" />,
    },
    {
      title: "Documentary & Short Film Editing",
      description:
        "Editing that enhances storytelling, pacing, and overall visual appeal for filmmakers and storytellers.",
      icon: () => <FaVideo size={50} className="text-orange-500" />,
    },
  ];

  return (
    <motion.div
      className="bg-white text-black"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={pageVariants}
      viewport={{ once: false }}
    >
      <section
        id="services"
        className="min-h-screen py-12 px-6 flex flex-col items-center"
      >
        <div className="text-center mb-8">
          <motion.h1
            suppressHydrationWarning
            variants={pageVariants}
            className="text-3xl md:text-5xl font-bold"
          >
            Our Services
          </motion.h1>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          viewport={{ once: false }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="relative w-full h-[300px] bg-gray-100 border border-gray-300 shadow-lg rounded-lg overflow-hidden text-center flex flex-col items-center justify-center p-6 transition duration-300 ease-in-out hover:bg-black hover:text-white"
            >
              <div className="mb-4 p-4 bg-gray-200 rounded-full flex items-center justify-center">
                {service.icon()}
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
