"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#18122B] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" width={90} height={90} />
          <h1 className="text-[#635985] text-xl font-bold">VERTEX</h1>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/about"
              className="text-[#635985] hover:text-[#443C68] transition"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-[#635985] hover:text-[#443C68] transition"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-[#635985] hover:text-[#443C68] transition"
            >
              Contact Us
            </Link>
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
            <Link
              href="/about"
              className="text-[#635985] hover:text-[#443C68] transition"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-[#635985] hover:text-[#443C68] transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-[#635985] hover:text-[#443C68] transition"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
