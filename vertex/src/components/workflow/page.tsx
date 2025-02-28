"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

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

    
      <div className="relative w-full max-w-5xl mt-10 flex items-center justify-center">
   
        <button
          onClick={prevStep}
          className="absolute left-[-60px] bg-black text-white p-3 rounded-full hover:bg-gray-800 transition hidden md:flex"
        >
          <ChevronLeft size={28} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-gray-200 p-8 rounded-lg shadow-md border border-gray-300 flex flex-col md:flex-row items-center md:items-start text-center md:text-left"
          >
          
            <div className="flex-1">
              <motion.div className="w-14 h-14 flex items-center justify-center bg-black text-white font-bold text-lg rounded-full mb-4 md:mb-6">
                {currentStep + 1}
              </motion.div>

              <h2 className="text-3xl font-bold text-gray-900">
                {steps[currentStep].title}
              </h2>
              <p className="text-gray-700 mt-2">
                {steps[currentStep].description}
              </p>
            </div>

         
            <div className="w-64 h-64 md:w-80 md:h-80 mt-6 md:mt-0 md:ml-8">
              <video
                src={steps[currentStep].video}
                className="object-cover w-full h-full rounded-lg shadow-md"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={nextStep}
          className="absolute right-[-60px] bg-black text-white p-3 rounded-full hover:bg-gray-800 transition hidden md:flex"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </motion.section>
  );
}
