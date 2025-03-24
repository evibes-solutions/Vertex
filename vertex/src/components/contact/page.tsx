"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please verify you are not a robot.");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <section className="min-h-screen bg-white text-black py-12 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
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
                placeholder="Enter your first name"
                className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-black font-semibold mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-black font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-black font-semibold mb-2">Phone</label>
              <input
                type="text"
                placeholder="Enter your phone number"
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
                placeholder="Enter your company name"
                className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-black font-semibold mb-2">Message</label>
              <textarea
                placeholder="Enter your message"
                rows={4}
                className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-start">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={setCaptchaValue}
              />
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
