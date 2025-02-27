"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <section className="min-h-screen bg-[#18122B] text-white py-12 px-6 flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 w-full">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-[#635985] text-left"
        >
          Our Workflow
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-[#B4A5D4] mt-2 text-left"
        >
          We follow a structured workflow to ensure efficiency and high-quality
          results.
        </motion.p>

        <div className="space-y-8 mt-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.03,
                backgroundColor: "#443C68",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="flex items-start bg-[#2A1F4A] p-6 rounded-lg transition-all shadow-md"
            >
              <motion.div
                className="w-12 h-12 flex items-center justify-center bg-[#635985] text-white font-bold text-lg rounded-full mr-4 transition-all"
                whileHover={{
                  scale: 1.15,
                  backgroundColor: "#B4A5D4",
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                {index + 1}
              </motion.div>

              <div>
                <h2 className="text-2xl font-bold text-[#B4A5D4]">
                  {step.title}
                </h2>
                <p className="text-[#E0CFF2] mt-2">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="lg:w-1/2 w-full flex justify-center mt-12 lg:mt-0"
      >
        <Image
          src="/logo.png"
          alt="Workflow Process"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />

        {/* <div className="flex justify-center items-center h-screen bg-gray-900">
          <video
            className="w-full max-w-4xl rounded-lg shadow-lg"
            controls
            autoPlay
            loop
            muted
          >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
      </motion.div>
    </section>
  );
}
