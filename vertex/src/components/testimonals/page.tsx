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
      image: "/client1.png",
    },
    {
      quote:
        "Amazing editing skills! The transitions and effects made our video look like a Hollywood production.",
      name: "Client Name",
      image: "/client2.png",
    },
  ];

  return (
    <section className="min-h-screen bg-[#18122B] text-white py-12 px-6">
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-[#635985]"
        >
          What Our Customers Say
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-[#B4A5D4] mt-2"
        >
          Hear from our happy clients about their experience with Vertex Studio.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className="bg-[#2A1F4A] p-6 rounded-lg shadow-lg flex items-center space-x-6"
          >
           
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#635985] flex-shrink-0">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>

            
            <div className="flex-1 text-left">
              <p className="text-lg italic text-[#E0CFF2]">
                {testimonial.quote}
              </p>

             
              <div className="flex mt-3 text-[#FFD700]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} fill="#FFD700" stroke="none" />
                ))}
              </div>

              <h3 className="text-[#B4A5D4] font-bold mt-4">
                – {testimonial.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
