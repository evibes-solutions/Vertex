"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Professional Video Editing",
      description:
        "Crisp, smooth, and engaging edits that enhance the flow and impact of your footage.",
      image: "/Professional-Video-Editing.png",
    },
    {
      title: "Color Grading & Enhancement",
      description:
        "We apply cinematic color grading to give your videos a polished, professional look.",
      image: "/Color-Grading.png",
    },
    {
      title: "Audio Editing & Sound Design",
      description:
        "Clear and immersive sound with noise reduction, background music, and professional sound effects.",
      image: "/Audio-Editing.png",
    },
    {
      title: "Wedding & Event Editing",
      description:
        "Beautifully edited wedding and event videos that capture emotions and special moments.",
      image: "/Wedding-Event-Editing.png",
    },
    {
      title: "Corporate & Commercial Video Editing",
      description:
        "Professional corporate videos, advertisements, and brand promos with a high production value.",
      image: "/Corporate-Video-Editing.png",
    },
    {
      title: "Social Media Content Editing",
      description:
        "Short-form, high-impact videos optimized for YouTube, Instagram, TikTok, and other platforms.",
      image: "/Social-Media-Editing.png",
    },
    {
      title: "Documentary & Short Film Editing",
      description:
        "Editing that enhances storytelling, pacing, and overall visual appeal for filmmakers and storytellers.",
      image: "/Documentary-Editing.png",
    },
  ];

  return (
    <section className="min-h-screen bg-[#18122B] text-white py-12 px-6">
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-[#635985]"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-[#B4A5D4] mt-2"
        >
          We offer a wide range of professional video editing services, ensuring
          each project meets the highest industry standards.
        </motion.p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className="bg-[#393053] p-6 rounded-lg shadow-lg text-center flex flex-col"
          >
            {/* Image Container */}
            <div className="w-full aspect-[4/3] bg-gray-700 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text Content */}
            <h2 className="text-2xl font-bold text-[#635985]">
              {service.title}
            </h2>
            <p className="text-[#B4A5D4] mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
