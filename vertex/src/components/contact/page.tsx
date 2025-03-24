"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <section className="min-h-screen bg-white text-black py-12 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-black text-center"
        >
          Contact Us
        </motion.h1>

        <div className="p-8 rounded-lg">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="flex flex-col">
              <label className="text-black font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-black font-semibold mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-black font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-black font-semibold mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-black font-semibold mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                placeholder="Enter your company name"
                value={formData.company}
                onChange={handleChange}
                className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-black font-semibold mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md"
              >
                Submit
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
