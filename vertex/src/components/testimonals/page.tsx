"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Vertex Studio turned our raw footage into a professional, engaging video. Their attention to detail is outstanding!",
      name: "Alice Johnson",
      image: "/client1.jpg",
    },
    {
      quote:
        "Amazing editing skills! The transitions and effects made our video look like a Hollywood production.",
      name: "Michael Brown",
      image: "/client2.jpg",
    },
    {
      quote:
        "Their team is highly professional and creative. They brought our vision to life beyond our expectations!",
      name: "Sophia Martinez",
      image: "/client3.jpg",
    },
    {
      quote:
        "Highly recommended! The final product was polished and exceeded our expectations.",
      name: "David Wilson",
      image: "/client4.jpg",
    },
    {
      quote:
        "Fantastic service and excellent communication. The best video editing company we have worked with!",
      name: "Emma Davis",
      image: "/client5.jpg",
    },
  ];

  return (
    <motion.section className="min-h-screen bg-white text-gray-900 py-12 px-4 sm:px-6 overflow-hidden">
      <motion.div
        className="text-center mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          What Our Customers Say
        </h1>
        <motion.p
          className="text-base sm:text-lg text-gray-700 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
          Hear from our happy clients about their experience with Vertex Studio.
        </motion.p>
      </motion.div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-6 sm:space-x-8 w-max"
          animate={{ x: [0, "-100%"] }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
          style={{ display: "flex", width: "max-content" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-200 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center sm:space-x-6 border border-gray-300 w-[90vw] sm:w-[600px] flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-black flex-shrink-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 text-center sm:text-left mt-4 sm:mt-0">
                <motion.p
                  className="text-sm sm:text-lg italic text-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.4 }}
                >
                  {testimonial.quote}
                </motion.p>
                <motion.div
                  className="flex justify-center sm:justify-start mt-3 text-[#FFD700]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.5 }}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="#FFD700" stroke="none" />
                  ))}
                </motion.div>
                <motion.h3
                  className="text-gray-900 font-bold mt-3 sm:mt-4 text-sm sm:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.6 }}
                >
                  ~ {testimonial.name}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
