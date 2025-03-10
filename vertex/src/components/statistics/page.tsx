"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaSmile, FaCogs, FaTrophy } from "react-icons/fa";

export default function Statistics() {
  const stats = [
    {
      title: "Completed Projects",
      value: 107,
      icon: <FaCheckCircle size={50} className="text-blue-500" />,
    },
    {
      title: "Happy Clients",
      value: 52,
      icon: <FaSmile size={50} className="text-green-500" />,
    },
    {
      title: "Services Provided",
      value: 71,
      icon: <FaCogs size={50} className="text-purple-500" />,
    },
    {
      title: "Winning Awards",
      value: 19,
      icon: <FaTrophy size={50} className="text-yellow-500" />,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-50 text-gray-900 py-20 px-6">
      <section className="max-w-5xl mx-auto text-center">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }} // Ensures animation happens every time it's in view
          className="text-3xl md:text-5xl font-bold"
        >
          We Have Completed <span className="text-blue-600">100+</span> Projects{" "}
          <span className="text-blue-600">Successfully</span>
        </motion.h1>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }} // Allows animations to repeat on navigation
            className="relative bg-white bg-opacity-80 border border-gray-300 shadow-lg backdrop-blur-md rounded-lg p-8 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-4 w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full shadow-lg">
              {stat.icon}
            </div>
            <AnimatedCounter finalValue={stat.value} />
            <p className="text-gray-600 text-sm md:text-base mt-2">
              {stat.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AnimatedCounter({ finalValue }: { finalValue: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, finalValue, {
      duration: 2,
      ease: "easeOut",
    });

    const unsubscribe = rounded.on("change", (latest) =>
      setDisplayValue(latest)
    );

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [finalValue, count, rounded]);

  return (
    <motion.h2
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }} // Repeats every time it's in view
      className="text-4xl font-bold text-gray-900"
    >
      {displayValue}
    </motion.h2>
  );
}
