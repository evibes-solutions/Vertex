"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 ">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image src="/logoblack.png" alt="Logo" width={100} height={100} />
        </div>

        <ul className="hidden md:flex text-lg space-x-6">
          <li>
            <a
              href="#services"
              className="text-black font-bold hover:text-gray-300 transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-black font-bold hover:text-gray-300 transition"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#workflow"
              className="text-black font-bold hover:text-gray-300 transition"
            >
              Workflow
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-black font-bold hover:text-gray-300 transition"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black/80 backdrop-blur-lg py-4 space-y-4 absolute w-full left-0">
          <li>
            <a
              href="#about"
              className="text-black hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-black hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#workflow"
              className="text-black hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Workflow
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-black hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
