"use client";
import { motion } from "framer-motion";
import Navbar from "../navbar/page";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-end text-black overflow-hidden px-10">
      <Navbar />
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative text-right max-w-2xl p-10 rounded-lg">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {"Professional Video Editing Services"
            .split("")
            .map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: index * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6 text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We help brands, businesses, and creators produce visually stunning,
          high-quality video content.
        </motion.p>
        <motion.a
          href="/contact"
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-lg font-medium transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );
}
