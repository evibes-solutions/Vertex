"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Professional Video Editing",
      description:
        "Crisp, smooth, and engaging edits that enhance the flow and impact of your footage.",
      image: "/Professional-Video-Editing.jpeg",
    },
    {
      title: "Color Grading & Enhancement",
      description:
        "We apply cinematic color grading to give your videos a polished, professional look.",
      image: "/Color-Grading.jpeg",
    },
    {
      title: "Audio Editing & Sound Design",
      description:
        "Clear and immersive sound with noise reduction, background music, and professional sound effects.",
      image: "/Audio-Editing.jpeg",
    },
    {
      title: "Wedding & Event Editing",
      description:
        "Beautifully edited wedding and event videos that capture emotions and special moments.",
      image: "/Wedding-Event-Editing.jpeg",
    },
    {
      title: "Corporate & Commercial Video Editing",
      description:
        "Professional corporate videos, advertisements, and brand promos with a high production value.",
      image: "/Corporate-Video-Editing.jpeg",
    },
    {
      title: "Social Media Content Editing",
      description:
        "Short-form, high-impact videos optimized for YouTube, Instagram, TikTok, and other platforms.",
      image: "/Social-Media-Editing.jpeg",
    },
    {
      title: "Documentary & Short Film Editing",
      description:
        "Editing that enhances storytelling, pacing, and overall visual appeal for filmmakers and storytellers.",
      image: "/Documentary-Editing.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updateSlidesToShow = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3);
    };

    updateSlidesToShow();

    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
  });

  return (
    <div className="bg-white">
      <section
        id="services"
        className="min-h-screen py-12 px-6 flex flex-col items-center"
        {...handlers}
      >
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold text-black"
          >
            Our Services
          </motion.h1>
        </div>

        <div className="relative w-full max-w-7xl flex items-center justify-center overflow-hidden">
          <div className="relative flex items-center justify-center space-x-0">
            <AnimatePresence>
              {[...services, ...services]
                .slice(currentIndex, currentIndex + slidesToShow)
                .map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full md:w-[500px] h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-lg bg-white p-4 text-center flex flex-col items-center justify-between border border-gray-300 mx-2"
                    onClick={() => {
                      if (index === 0) prevSlide();
                      if (index === slidesToShow - 1) nextSlide();
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={700}
                      height={450}
                      className="object-cover w-full h-3/4 rounded-lg"
                    />
                    <div className="mt-2 px-4">
                      <h3 className="text-lg md:text-xl font-semibold text-black">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-lg text-gray-800">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex mt-6 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-black w-4" : "bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </section>
    </div>
  );
}
