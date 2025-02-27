"use client";
import { motion } from "framer-motion";
import { FaFilm, FaClock, FaCogs, FaDollarSign } from "react-icons/fa";

export default function WhyChooseUs() {
  const steps = [
    {
      title: "High-Quality Editing",
      description: "We ensure professional-grade edits with cinematic quality.",
      icon: <FaFilm className="text-[#B4A5D4] text-4xl" />,
    },
    {
      title: "Fast Turnaround Time",
      description: "Quick and efficient service without compromising quality.",
      icon: <FaClock className="text-[#B4A5D4] text-4xl" />,
    },
    {
      title: "Custom Solutions",
      description: "Tailored editing styles to fit your specific vision.",
      icon: <FaCogs className="text-[#B4A5D4] text-4xl" />,
    },
    {
      title: "Affordable & Competitive Pricing",
      description: "Top-tier quality at budget-friendly rates.",
      icon: <FaDollarSign className="text-[#B4A5D4] text-4xl" />,
    },
  ];

  return (
    <section className="min-h-screen bg-[#18122B] text-white py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#635985]"
        >
          Why Choose Us?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg text-[#B4A5D4] mt-2"
        >
          Our streamlined process ensures quality, speed, and satisfaction.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className="flex items-center space-x-6 p-6 bg-[#2A1F4A] rounded-lg shadow-lg"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              {step.icon}
            </motion.div>

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
