"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#18122B] text-white py-12 px-6">
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-[#635985]"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-[#B4A5D4] mt-2"
        >
          Have questions or want to book an appointment? Fill out the form
          below.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto bg-[#2A1F4A] p-8 rounded-lg shadow-lg">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-[#B4A5D4] font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="p-3 rounded bg-[#393053] text-white border border-[#635985] focus:outline-none focus:ring-2 focus:ring-[#B4A5D4]"
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col">
            <label className="text-[#B4A5D4] font-semibold mb-2">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Enter company name"
              className="p-3 rounded bg-[#393053] text-white border border-[#635985] focus:outline-none focus:ring-2 focus:ring-[#B4A5D4]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-[#B4A5D4] font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded bg-[#393053] text-white border border-[#635985] focus:outline-none focus:ring-2 focus:ring-[#B4A5D4]"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-[#B4A5D4] font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="p-3 rounded bg-[#393053] text-white border border-[#635985] focus:outline-none focus:ring-2 focus:ring-[#B4A5D4]"
            />
          </div>

         
          <div className="flex flex-col md:col-span-2">
            <label className="text-[#B4A5D4] font-semibold mb-2">Message</label>
            <textarea
              placeholder="Enter your message"
              rows={4}
              className="p-3 rounded bg-[#393053] text-white border border-[#635985] focus:outline-none focus:ring-2 focus:ring-[#B4A5D4]"
            ></textarea>
          </div>

      
          <div className="md:col-span-2 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#635985] hover:bg-[#B4A5D4] text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md"
            >
              Book an Appointment
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}
