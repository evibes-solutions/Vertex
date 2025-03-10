"use client";
import { motion } from "framer-motion";

export default function Workflow() {
  const steps = [
    {
      title: "Consultation & Project Briefing",
      description:
        "We discuss your project details, requirements, and expectations.",
      video: "/step1.mp4",
    },
    {
      title: "Reviewing Raw Footage",
      description:
        "Our team analyzes and organizes your footage to plan the best editing approach.",
      video: "/step2.mp4",
    },
    {
      title: "Editing & Enhancement",
      description:
        "We apply seamless cuts, transitions, color correction, and effects to enhance the video.",
      video: "/step3.mp4",
    },
    {
      title: "Client Feedback & Revisions",
      description:
        "You review the edited version, and we make adjustments as per your feedback.",
      video: "/step4.mp4",
    },
    {
      title: "Final Delivery",
      description:
        "The final high-resolution video is delivered in your preferred format, ready for use.",
      video: "/step5.mp4",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-white text-gray-900 py-12 px-6 flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-bold text-black text-center"
      >
        Our Workflow
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-md md:text-lg text-gray-700 mt-2 text-center max-w-lg"
      >
        We follow a structured workflow to ensure efficiency and high-quality
        results.
      </motion.p>

      <div className="relative w-full max-w-5xl mt-10 flex flex-col items-center justify-center space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="bg-gray-200 p-6 md:p-8 rounded-lg shadow-md border border-gray-300 flex flex-col md:flex-row items-center text-center md:text-left w-full md:max-w-5xl"
          >
            <div className="md:w-2/3">
              <motion.div
                className="w-12 h-12 flex items-center justify-center bg-black text-white font-bold text-lg rounded-full mb-3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
              >
                {index + 1}
              </motion.div>

              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.4 }}
              >
                {step.title}
              </motion.h2>
              <motion.p
                className="text-gray-700 mt-2 text-sm md:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.6 }}
              >
                {step.description}
              </motion.p>
            </div>

            <motion.div
              className="w-full md:w-1/3 md:h-64 mt-6 md:mt-0 md:ml-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 + 0.8 }}
            >
              <video
                src={step.video}
                className="object-cover w-full h-full rounded-lg shadow-md"
                autoPlay
                loop
                muted
                playsInline
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
