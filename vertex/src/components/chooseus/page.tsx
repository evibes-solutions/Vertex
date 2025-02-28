"use client";
import { motion } from "framer-motion";
import { FaFilm, FaClock, FaCogs, FaDollarSign } from "react-icons/fa";

export default function WhyChooseUs() {
  const steps = [
    {
      title: "High-Quality Editing",
      description: "We ensure professional-grade edits with cinematic quality.",
      icon: <FaFilm className="text-red-500" />,
    },
    {
      title: "Fast Turnaround Time",
      description: "Quick and efficient service without compromising quality.",
      icon: <FaClock className="text-green-500" />,
    },
    {
      title: "Custom Solutions",
      description: "Tailored editing styles to fit your specific vision.",
      icon: <FaCogs className="text-blue-500" />,
    },
    {
      title: "Affordable Pricing",
      description: "Top-tier quality at budget-friendly rates.",
      icon: <FaDollarSign className="text-yellow-500" />,
    },
  ];

  return (
    <section className="min-h-screen bg-white text-gray-900 py-12 px-6 flex flex-col md:flex-row-reverse items-center gap-10">
      <div className="md:w-1/2">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-black text-center md:text-left"
        >
          Why Choose Us?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 mt-2 text-center md:text-left"
        >
          Our streamlined process ensures quality, speed, and satisfaction.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="flex items-center space-x-4 p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-md transition-transform"
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
                whileHover={{ rotate: 10 }}
                className="text-4xl"
              >
                {step.icon}
              </motion.div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h2>
                <p className="text-gray-700 mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="md:w-1/2 h-[600px] relative rounded-lg overflow-hidden">
        <video
          className="w-full h-full object-cover rounded-lg shadow-lg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/work.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
