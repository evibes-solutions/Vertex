"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="min-h-screen bg-white text-gray-900 py-12 px-6 flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-black text-left"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-gray-700 mt-2 text-left"
          >
            Have questions or want to book an appointment? Fill out the form
            below.
          </motion.p>

          <div className="bg-gray-200 border-gray-300 p-8 rounded-lg shadow-lg mt-6">
            <form className="grid grid-cols-1 gap-6">
              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="p-3 rounded bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-3 rounded bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Enter your message"
                  rows={4}
                  className="p-3 rounded bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                ></textarea>
              </div>

              <div className="text-left">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-900 hover:to-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md"
                >
                  Book an Appointment
                </motion.button>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden md:block">
          <Image
            src="/picture.jpg"
            alt="Contact"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
