"use client";
import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaFilm,
  FaMagic,
  FaCommentDots,
  FaCheckCircle,
} from "react-icons/fa";

export default function Workflow() {
  const steps = [
    {
      icon: <FaClipboardList className="text-white text-4xl" />,
      title: "Consultation & Project Briefing",
      description:
        "We discuss your project details, requirements, and expectations.",
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-700",
    },
    {
      icon: <FaFilm className="text-white text-4xl" />,
      title: "Reviewing Raw Footage",
      description:
        "Our team analyzes and organizes your footage to plan the best editing approach.",
      bgColor: "bg-gradient-to-r from-red-500 to-red-700",
    },
    {
      icon: <FaMagic className="text-white text-4xl" />,
      title: "Editing & Enhancement",
      description:
        "We apply seamless cuts, transitions, color correction, and effects to enhance the video.",
      bgColor: "bg-gradient-to-r from-purple-500 to-purple-700",
    },
    {
      icon: <FaCommentDots className="text-white text-4xl" />,
      title: "Client Feedback & Revisions",
      description:
        "You review the edited version, and we make adjustments as per your feedback.",
      bgColor: "bg-gradient-to-r from-green-500 to-green-700",
    },
    {
      icon: <FaCheckCircle className="text-white text-4xl" />,
      title: "Final Delivery",
      description:
        "The final high-resolution video is delivered in your preferred format, ready for use.",
      bgColor: "bg-gradient-to-r from-yellow-500 to-yellow-700",
    },
  ];

  return (
    <section className="relative min-h-[80vh] bg-gray-50 text-gray-900 py-10 px-6 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-3xl md:text-5xl font-bold text-black text-center"
      >
        Our Workflow
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-md md:text-lg text-gray-700 mt-2 text-center max-w-lg"
      >
        We follow a structured workflow to ensure efficiency and high-quality
        results.
      </motion.p>

      <div className="relative w-full max-w-4xl mt-10 flex flex-col items-center space-y-6">
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
            viewport={{ once: false }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className="bg-white p-6 md:p-7 rounded-lg shadow-lg border border-gray-200 flex items-center w-full transition-transform hover:shadow-xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: false }}
              whileHover={{ rotate: 10 }}
              className={`w-16 h-16 flex items-center justify-center ${step.bgColor} rounded-full shadow-lg mr-5`}
            >
              {step.icon}
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
