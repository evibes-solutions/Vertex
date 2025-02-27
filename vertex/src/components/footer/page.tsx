"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#18122B] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-xl font-bold text-[#B4A5D4] mb-3">Contact Us</h2>
          <p className="text-[#E0CFF2]">📞 Phone: (+92 300 1234567)</p>
          <p className="text-[#E0CFF2]">
            📍 Address: Vertex Studio, Lahore, Pakistan
          </p>
          <p className="text-[#E0CFF2]">📩 Email: vertex.studio.va@gmail.com</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-xl font-bold text-[#B4A5D4] mb-3">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-6 text-[#E0CFF2] text-2xl">
            <Link
              href="https://facebook.com/vertexstudio"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookF className="hover:text-[#B4A5D4] transition" />
            </Link>
            <Link
              href="https://instagram.com/vertexstudio"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram className="hover:text-[#B4A5D4] transition" />
            </Link>
            <Link
              href="https://linkedin.com/company/vertexstudio"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="hover:text-[#B4A5D4] transition" />
            </Link>
            <Link
              href="https://youtube.com/@vertexstudio"
              target="_blank"
              aria-label="YouTube"
            >
              <FaYoutube className="hover:text-[#B4A5D4] transition" />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 text-center text-[#B4A5D4] text-sm">
        &copy; {new Date().getFullYear()} Vertex Studio. All Rights Reserved.
      </div>
    </footer>
  );
}
