"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" width={90} height={90} />
          <h1 className="text-white text-xl font-bold">VERTEX</h1>
        </div>
       
        <ul className="flex space-x-6">
          <li>
            <Link href="/about" className="text-white hover:text-gray-300">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-white hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
