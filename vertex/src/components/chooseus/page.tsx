"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function WhyChooseUs() {
  const steps = [
    {
      title: "High-Quality Editing",
      description: "We ensure professional-grade edits with cinematic quality.",
    },
    {
      title: "Fast Turnaround Time",
      description: "Quick and efficient service without compromising quality.",
    },
    {
      title: "Custom Solutions",
      description: "Tailored editing styles to fit your specific vision.",
    },
    {
      title: "Affordable & Competitive Pricing",
      description: "Top-tier quality at budget-friendly rates.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#18122B] text-white py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-[#635985]"
        >
          Why Choose Us?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-[#B4A5D4] mt-2"
        >
          Our streamlined process ensures quality, speed, and satisfaction.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            className="flex items-center space-x-4 p-6 bg-[#2A1F4A] rounded-lg shadow-lg"
          >
            <FaCheckCircle className="text-[#B4A5D4] text-3xl flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-[#E0CFF2]">
                {step.title}
              </h2>
              <p className="text-[#B4A5D4] mt-1">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
