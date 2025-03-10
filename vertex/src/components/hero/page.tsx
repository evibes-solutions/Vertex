"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../navbar/page";

export default function Hero() {
  return (
    <section className="relative h-screen bg-white flex items-center justify-end text-black overflow-hidden px-10">
      <Navbar />
      <div className="absolute left-0 top-0 h-full w-1/2 ">
        <Image
          src="/background.png"
          alt="Background"
          width={600}
          height={300}
          className="object-cover"
        />
      </div>

      <div className="relative max-w-2xl p-10 text-right">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          {"Professional Video Editing Services"
            .split("")
            .map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: index * 0.05 }}
                viewport={{ once: false }}
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
          viewport={{ once: false }}
        >
          We help brands, businesses, and creators produce visually stunning,
          high-quality video content.
        </motion.p>
        <motion.a
          href="/contact"
          className="px-6 py-3 bg-black hover:bg-gray-900 text-white rounded-lg text-lg font-medium transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false }}
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );
}
