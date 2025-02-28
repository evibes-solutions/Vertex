"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Vertex Studio turned our raw footage into a professional, engaging video. Their attention to detail is outstanding!",
      name: "Client Name",
      image: "/client1.jpg",
    },
    {
      quote:
        "Amazing editing skills! The transitions and effects made our video look like a Hollywood production.",
      name: "Client Name",
      image: "/client2.jpg",
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
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          What Our Customers Say
        </h1>
        <p className="text-lg text-gray-700 mt-2">
          Hear from our happy clients about their experience with Vertex Studio.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className="bg-gray-200 p-6 rounded-lg shadow-lg flex items-center space-x-6 border border-gray-300"
          >
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-black flex-shrink-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.3,
              }}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </motion.div>

            <div className="flex-1 text-left">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="text-lg italic text-gray-800"
              >
                {testimonial.quote}
              </motion.p>

              <motion.div
                className="flex mt-3 text-[#FFD700]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.4 }}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} fill="#FFD700" stroke="none" />
                ))}
              </motion.div>

              <motion.h3
                className="text-gray-900 font-bold mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.5 }}
              >
                – {testimonial.name}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
