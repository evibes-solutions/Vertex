"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Workflow() {
  const steps = [
    {
      title: "Consultation & Project Briefing",
      description:
        "We discuss your project details, requirements, and expectations.",
      image: "/step1.jpg",
    },
    {
      title: "Reviewing Raw Footage",
      description:
        "Our team analyzes and organizes your footage to plan the best editing approach.",
      image: "/step2.jpg",
    },
    {
      title: "Editing & Enhancement",
      description:
        "We apply seamless cuts, transitions, color correction, and effects to enhance the video.",
      image: "/step3.jpg",
    },
    {
      title: "Client Feedback & Revisions",
      description:
        "You review the edited version, and we make adjustments as per your feedback.",
      image: "/step4.jpg",
    },
    {
      title: "Final Delivery",
      description:
        "The final high-resolution video is delivered in your preferred format, ready for use.",
      image: "/step5.jpg",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-white text-gray-900 py-12 px-6"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-black text-center"
        >
          Our Workflow
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-gray-700 mt-2 text-center"
        >
          We follow a structured workflow to ensure efficiency and high-quality
          results.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="space-y-8 mt-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex items-center bg-gray-200 p-6 rounded-lg shadow-md border border-gray-200"
              whileHover={{
                scale: 1.03,
                backgroundColor: "#f3f4f6",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              <motion.div
                className="w-12 h-12 flex items-center justify-center bg-black text-white font-bold text-lg rounded-full mr-4"
                whileHover={{
                  scale: 1.15,
                  backgroundColor: "#2563EB",
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                {index + 1}
              </motion.div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h2>
                <p className="text-gray-700 mt-2">{step.description}</p>
              </div>

              <div className="w-24 h-24 md:w-32 md:h-32 ml-4 flex-shrink-0">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full rounded-lg shadow-md"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
