"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";

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

  const handlers = useSwipeable({
    onSwipedLeft: nextStep,
    onSwipedRight: prevStep,
    preventScrollOnSwipe: true,
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-white text-gray-900 py-12 px-6 flex flex-col items-center justify-center"
      {...handlers}
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

      <div className="relative w-full max-w-5xl mt-10 flex flex-col md:flex-row items-center justify-center">
        <button
          onClick={prevStep}
          className="absolute left-2 md:left-[-60px] bg-black text-white p-3 rounded-full hover:bg-gray-800 transition hidden md:flex"
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
            className="bg-gray-200 p-6 md:p-8 rounded-lg shadow-md border border-gray-300 flex flex-col md:flex-row items-center md:items-start text-center md:text-left w-full md:max-w-5xl"
          >
            <div className="flex flex-col items-center md:items-start">
              <motion.div className="w-12 h-12 flex items-center justify-center bg-black text-white font-bold text-lg rounded-full mb-3 md:mb-4">
                {currentStep + 1}
              </motion.div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {steps[currentStep].title}
              </h2>
              <p className="text-gray-700 mt-2 text-sm md:text-lg px-4 md:px-0">
                {steps[currentStep].description}
              </p>
            </div>

            <div className="w-full md:w-200 md:h-64 mt-6 md:mt-0 md:ml-6">
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
          className="absolute right-2 md:right-[-60px] bg-black text-white p-3 rounded-full hover:bg-gray-800 transition hidden md:flex"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      <div className="flex mt-6 space-x-2">
        {steps.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentStep ? "bg-black w-4" : "bg-gray-500"
            }`}
            onClick={() => setCurrentStep(index)}
          ></button>
        ))}
      </div>

      <div className="flex md:hidden mt-6 space-x-4">
        <button
          onClick={prevStep}
          className="bg-gray-700 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-900 transition"
        >
          ⬅ Prev
        </button>
        <button
          onClick={nextStep}
          className="bg-gray-700 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-900 transition"
        >
          Next ➡
        </button>
      </div>
    </motion.section>
  );
}
