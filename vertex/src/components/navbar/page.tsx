"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-4 shadow-lg ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" width={120} height={120} />
          <h1 className="text-[#635985] text-xl font-bold">VERTEX STUDIOS</h1>
        </div>

        <ul className="hidden md:flex text-xl space-x-6">
          <li>
            <a
              href="#about"
              className="text-[#635985] hover:text-[#443C68] transition"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-[#635985] hover:text-[#443C68] transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#workflow"
              className="text-[#635985] hover:text-[#443C68] transition"
              onClick={() => setIsOpen(false)}
            >
              Workflow
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[#635985] hover:text-[#443C68] transition"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-[#635985]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-[#18122B] py-4 space-y-4">
          <li>
            <a
              href="#about"
              className="text-[#635985] hover:text-[#443C68] transition"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-[#635985] hover:text-[#443C68] transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#workflow"
              className="text-[#635985] hover:text-[#443C68] transition"
              onClick={() => setIsOpen(false)}
            >
              Workflow
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[#635985] hover:text-[#443C68] transition"
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
