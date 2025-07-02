'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const videoUrls = [
  '/1.mp4',
  '/2.mp4',
  '/3.mp4',
  '/4.mp4',
  '/5.mp4',
  '/6.mp4',
];

export default function Portfolio() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % videoUrls.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + videoUrls.length) % videoUrls.length);
  const goToSlide = (index: number) => setCurrent(index);

  return (
    <div className="flex flex-col min-h-[100svh] bg-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-3xl md:text-5xl font-bold mb-6 text-black text-center px-4 pt-4"
      >
        Portfolio
      </motion.h1>

      <div className="relative w-full aspect-video overflow-hidden flex-1">
        <AnimatePresence mode="wait">
          <motion.video
            key={current}
            src={videoUrls[current]}
            controls
            autoPlay
            loop
            muted
            preload="auto"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-1.5 sm:p-2 rounded-full z-10"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-1.5 sm:p-2 rounded-full z-10"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4 mb-6">
        {videoUrls.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
              current === index ? 'bg-black scale-110' : 'bg-gray-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
