"use client";
import { motion } from "framer-motion";

export default function Workflow() {
  const steps = [
    {
      title: "Consultation & Project Briefing",
      description:
        "We discuss your project details, requirements, and expectations.",
    },
    {
      title: "Reviewing Raw Footage",
      description:
        "Our team analyzes and organizes your footage to plan the best editing approach.",
    },
    {
      title: "Editing & Enhancement",
      description:
        "We apply seamless cuts, transitions, color correction, and effects to enhance the video.",
    },
    {
      title: "Client Feedback & Revisions",
      description:
        "You review the edited version, and we make adjustments as per your feedback.",
    },
    {
      title: "Final Delivery",
      description:
        "The final high-resolution video is delivered in your preferred format, ready for use.",
    },
  ];

  return (
    <section className="relative min-h-[80vh] bg-white text-gray-900 py-10 px-6 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-black text-center"
      >
        Our Workflow
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-md md:text-lg text-gray-700 mt-2 text-center max-w-lg"
      >
        We follow a structured workflow to ensure efficiency and high-quality
        results.
      </motion.p>

      <div className="relative w-full max-w-4xl mt-10 flex flex-col items-center space-y-4">
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
            className="bg-gray-100 p-4 md:p-5 rounded-lg shadow-md border border-gray-300 flex items-center w-full transition-transform"
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
              className="w-10 h-10 flex items-center justify-center bg-black text-white font-bold text-lg rounded-full mr-4"
            >
              {index + 1}
            </motion.div>

            <div>
              <h2 className="text-lg md:text-xl font-bold text-gray-900">
                {step.title}
              </h2>
              <p className="text-gray-700 mt-1 text-sm md:text-base">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
