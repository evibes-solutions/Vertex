"use client";
import { motion } from "framer-motion";
import { FaVideo, FaMagic, FaPalette, FaMusic } from "react-icons/fa";

export default function About() {
  const features = [
    {
      icon: <FaVideo className="text-blue-500 text-3xl" />,
      text: "Cinematic Video Editing",
    },
    {
      icon: <FaMagic className="text-purple-500 text-3xl" />,
      text: "Smooth Transitions & Effects",
    },
    {
      icon: <FaPalette className="text-orange-500 text-3xl" />,
      text: "Advanced Color Grading",
    },
    {
      icon: <FaMusic className="text-green-500 text-3xl" />,
      text: "High-Quality Sound Design",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between bg-white text-black px-6 py-10">
      <motion.div
        className="relative z-10 max-w-2xl p-10 lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-black mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          About Vertex Studio
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-black leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          At <span className="font-semibold text-black">Vertex Studio</span>, we
          specialize in high-quality video editing and post-production services
          for individuals, businesses, and creators. Whether you need a
          cinematic wedding film, a corporate promotional video, engaging social
          media content, or high-end commercial editing, our expert team ensures
          every project is polished to perfection.
        </motion.p>

        <div className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              {feature.icon}
              <p className="text-lg md:text-xl text-black">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-xl"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
}
