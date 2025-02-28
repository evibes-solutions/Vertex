"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="Vertex Studio Logo"
            width={200}
            height={200}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h2 className="text-xl font-bold text-[#B4A5D4] mb-2">Contact Us</h2>
          <p className="text-[#E0CFF2]">📞 (+92 300 1234567)</p>
          <p className="text-[#E0CFF2]">📍 Vertex Studio, Lahore, Pakistan</p>
          <p className="text-[#E0CFF2]">📩 vertex.studio.va@gmail.com</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex space-x-6 text-2xl"
        >
          <Link
            href="https://facebook.com/vertexstudio"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-[#1877F2] hover:opacity-80 transition" />
          </Link>
          <Link
            href="https://instagram.com/vertexstudio"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram className="text-[#E4405F] hover:opacity-80 transition" />
          </Link>
          <Link
            href="https://linkedin.com/company/vertexstudio"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-[#0077B5] hover:opacity-80 transition" />
          </Link>
          <Link
            href="https://youtube.com/@vertexstudio"
            target="_blank"
            aria-label="YouTube"
          >
            <FaYoutube className="text-[#FF0000] hover:opacity-80 transition" />
          </Link>
        </motion.div>

        <div className="text-[#B4A5D4] text-sm text-center md:text-right mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Vertex Studio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
